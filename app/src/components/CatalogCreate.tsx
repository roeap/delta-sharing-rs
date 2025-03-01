import {
    Button,
    Dialog,
    DialogActions,
    DialogBody,
    DialogContent,
    DialogSurface,
    DialogTitle,
    DialogTrigger,
    Field,
    Input,
    InputProps,
    makeStyles,
    Tab,
    TabList,
    TabListProps,
    TabValue,
    tokens,
} from "@fluentui/react-components";
import { Add20Regular } from "@fluentui/react-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    Dispatch,
    SetStateAction,
    useCallback,
    useState,
    useContext,
} from "react";
import ucClient from "../client";
import { CreateCatalogRequestJson } from "../gen/delta_sharing/catalogs/v1/svc_pb";
import { NotifyContext } from "../context";

type InputChange = NonNullable<InputProps["onChange"]>;
type TabSelect = NonNullable<TabListProps["onTabSelect"]>;

const useStyles = makeStyles({
    tabs: {
        padding: "0 10px",
        display: "flex",
        flexDirection: "column",
        rowGap: tokens.spacingVerticalL,
    },
});

const useCallbacs = (
    setValues: Dispatch<SetStateAction<CreateCatalogRequestJson>>,
) => {
    const onNameChange: InputChange = useCallback((_ev, data) => {
        setValues((curr) => ({ ...curr, name: data.value }));
    }, []);
    const onStorageChange: InputChange = useCallback((_ev, data) => {
        setValues((curr) => ({ ...curr, storageRoot: data.value }));
    }, []);
    const onProviderChange: InputChange = useCallback(
        (_ev, data) => {
            setValues((curr) => ({ ...curr, providerName: data.value }));
        },
        [setValues],
    );
    const onShareChange: InputChange = useCallback(
        (_ev, data) => {
            setValues((curr) => ({ ...curr, shareName: data.value }));
        },
        [setValues],
    );

    return { onNameChange, onStorageChange, onProviderChange, onShareChange };
};

const Default = () => {
    const [values, setValues] = useState<CreateCatalogRequestJson>({});
    const [open, setOpen] = useState(false);
    const styles = useStyles();

    const [selectedValue, setSelectedValue] = useState<TabValue>("managed");
    const onTabSelect: TabSelect = useCallback((_ev, data) => {
        setSelectedValue(data.value);
    }, []);

    const notify = useContext(NotifyContext);
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: ucClient.createCatalog,
        onError: () => {
            notify("error", "Failed to create catalog");
        },
        onSuccess: () => {
            notify("success", "Catalog created successfully");
            queryClient.invalidateQueries({ queryKey: ["catalogs", "list"] });
            setOpen(false);
            setValues({});
        },
    });

    const { onNameChange, onStorageChange, onProviderChange, onShareChange } =
        useCallbacs(setValues);

    const onClick = useCallback(() => {
        mutation.mutate(values);
    }, [mutation, values]);

    return (
        <Dialog open={open} onOpenChange={(_ev, data) => setOpen(data.open)}>
            <DialogTrigger disableButtonEnhancement>
                <Button
                    icon={<Add20Regular />}
                    appearance="subtle"
                    title="Add"
                />
            </DialogTrigger>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>Create a new Catalog</DialogTitle>
                    <DialogContent>
                        <TabList
                            selectedValue={selectedValue}
                            onTabSelect={onTabSelect}
                        >
                            <Tab value="managed">Managed</Tab>
                            <Tab value="sharing">Sharing</Tab>
                        </TabList>
                        <div className={styles.tabs}>
                            <Field label="Name">
                                <Input
                                    value={values.name}
                                    onChange={onNameChange}
                                />
                            </Field>
                            {selectedValue === "managed" && (
                                <Field label="Storage root">
                                    <Input
                                        value={values.storageRoot}
                                        onChange={onStorageChange}
                                    />
                                </Field>
                            )}
                            {selectedValue === "sharing" && (
                                <>
                                    <Field label="Provider name">
                                        <Input
                                            value={values.providerName}
                                            onChange={onProviderChange}
                                        />
                                    </Field>
                                    <Field label="Share name">
                                        <Input
                                            value={values.shareName}
                                            onChange={onShareChange}
                                        />
                                    </Field>
                                </>
                            )}
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button appearance="primary" onClick={onClick}>
                            Create
                        </Button>
                        <DialogTrigger disableButtonEnhancement>
                            <Button appearance="secondary">Close</Button>
                        </DialogTrigger>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    );
};

export default Default;
