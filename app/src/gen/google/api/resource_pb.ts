// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file google/api/resource.proto (package google.api, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenExtension, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, extDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { FieldOptions, FileOptions, MessageOptions } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_descriptor } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/api/resource.proto.
 */
export const file_google_api_resource: GenFile = /*@__PURE__*/
  fileDesc("Chlnb29nbGUvYXBpL3Jlc291cmNlLnByb3RvEgpnb29nbGUuYXBpIu4CChJSZXNvdXJjZURlc2NyaXB0b3ISDAoEdHlwZRgBIAEoCRIPCgdwYXR0ZXJuGAIgAygJEhIKCm5hbWVfZmllbGQYAyABKAkSNwoHaGlzdG9yeRgEIAEoDjImLmdvb2dsZS5hcGkuUmVzb3VyY2VEZXNjcmlwdG9yLkhpc3RvcnkSDgoGcGx1cmFsGAUgASgJEhAKCHNpbmd1bGFyGAYgASgJEjMKBXN0eWxlGAogAygOMiQuZ29vZ2xlLmFwaS5SZXNvdXJjZURlc2NyaXB0b3IuU3R5bGUiWwoHSGlzdG9yeRIXChNISVNUT1JZX1VOU1BFQ0lGSUVEEAASHQoZT1JJR0lOQUxMWV9TSU5HTEVfUEFUVEVSThABEhgKFEZVVFVSRV9NVUxUSV9QQVRURVJOEAIiOAoFU3R5bGUSFQoRU1RZTEVfVU5TUEVDSUZJRUQQABIYChRERUNMQVJBVElWRV9GUklFTkRMWRABIjUKEVJlc291cmNlUmVmZXJlbmNlEgwKBHR5cGUYASABKAkSEgoKY2hpbGRfdHlwZRgCIAEoCTpsChJyZXNvdXJjZV9yZWZlcmVuY2USHS5nb29nbGUucHJvdG9idWYuRmllbGRPcHRpb25zGJ8IIAEoCzIdLmdvb2dsZS5hcGkuUmVzb3VyY2VSZWZlcmVuY2VSEXJlc291cmNlUmVmZXJlbmNlOm4KE3Jlc291cmNlX2RlZmluaXRpb24SHC5nb29nbGUucHJvdG9idWYuRmlsZU9wdGlvbnMYnQggAygLMh4uZ29vZ2xlLmFwaS5SZXNvdXJjZURlc2NyaXB0b3JSEnJlc291cmNlRGVmaW5pdGlvbjpcCghyZXNvdXJjZRIfLmdvb2dsZS5wcm90b2J1Zi5NZXNzYWdlT3B0aW9ucxidCCABKAsyHi5nb29nbGUuYXBpLlJlc291cmNlRGVzY3JpcHRvclIIcmVzb3VyY2VCqwEKDmNvbS5nb29nbGUuYXBpQg1SZXNvdXJjZVByb3RvUAFaQWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYXBpL2Fubm90YXRpb25zO2Fubm90YXRpb25zogIDR0FYqgIKR29vZ2xlLkFwacoCCkdvb2dsZVxBcGniAhZHb29nbGVcQXBpXEdQQk1ldGFkYXRh6gILR29vZ2xlOjpBcGliBnByb3RvMw", [file_google_protobuf_descriptor]);

/**
 * A simple descriptor of a resource type.
 *
 * ResourceDescriptor annotates a resource message (either by means of a
 * protobuf annotation or use in the service config), and associates the
 * resource's schema, the resource type, and the pattern of the resource name.
 *
 * Example:
 *
 *     message Topic {
 *       // Indicates this message defines a resource schema.
 *       // Declares the resource type in the format of {service}/{kind}.
 *       // For Kubernetes resources, the format is {api group}/{kind}.
 *       option (google.api.resource) = {
 *         type: "pubsub.googleapis.com/Topic"
 *         pattern: "projects/{project}/topics/{topic}"
 *       };
 *     }
 *
 * The ResourceDescriptor Yaml config will look like:
 *
 *     resources:
 *     - type: "pubsub.googleapis.com/Topic"
 *       pattern: "projects/{project}/topics/{topic}"
 *
 * Sometimes, resources have multiple patterns, typically because they can
 * live under multiple parents.
 *
 * Example:
 *
 *     message LogEntry {
 *       option (google.api.resource) = {
 *         type: "logging.googleapis.com/LogEntry"
 *         pattern: "projects/{project}/logs/{log}"
 *         pattern: "folders/{folder}/logs/{log}"
 *         pattern: "organizations/{organization}/logs/{log}"
 *         pattern: "billingAccounts/{billing_account}/logs/{log}"
 *       };
 *     }
 *
 * The ResourceDescriptor Yaml config will look like:
 *
 *     resources:
 *     - type: 'logging.googleapis.com/LogEntry'
 *       pattern: "projects/{project}/logs/{log}"
 *       pattern: "folders/{folder}/logs/{log}"
 *       pattern: "organizations/{organization}/logs/{log}"
 *       pattern: "billingAccounts/{billing_account}/logs/{log}"
 *
 * @generated from message google.api.ResourceDescriptor
 */
export type ResourceDescriptor = Message<"google.api.ResourceDescriptor"> & {
  /**
   * The resource type. It must be in the format of
   * {service_name}/{resource_type_kind}. The `resource_type_kind` must be
   * singular and must not include version numbers.
   *
   * Example: `storage.googleapis.com/Bucket`
   *
   * The value of the resource_type_kind must follow the regular expression
   * /[A-Za-z][a-zA-Z0-9]+/. It should start with an upper case character and
   * should use PascalCase (UpperCamelCase). The maximum number of
   * characters allowed for the `resource_type_kind` is 100.
   *
   * @generated from field: string type = 1;
   */
  type: string;

  /**
   * Optional. The relative resource name pattern associated with this resource
   * type. The DNS prefix of the full resource name shouldn't be specified here.
   *
   * The path pattern must follow the syntax, which aligns with HTTP binding
   * syntax:
   *
   *     Template = Segment { "/" Segment } ;
   *     Segment = LITERAL | Variable ;
   *     Variable = "{" LITERAL "}" ;
   *
   * Examples:
   *
   *     - "projects/{project}/topics/{topic}"
   *     - "projects/{project}/knowledgeBases/{knowledge_base}"
   *
   * The components in braces correspond to the IDs for each resource in the
   * hierarchy. It is expected that, if multiple patterns are provided,
   * the same component name (e.g. "project") refers to IDs of the same
   * type of resource.
   *
   * @generated from field: repeated string pattern = 2;
   */
  pattern: string[];

  /**
   * Optional. The field on the resource that designates the resource name
   * field. If omitted, this is assumed to be "name".
   *
   * @generated from field: string name_field = 3;
   */
  nameField: string;

  /**
   * Optional. The historical or future-looking state of the resource pattern.
   *
   * Example:
   *
   *     // The InspectTemplate message originally only supported resource
   *     // names with organization, and project was added later.
   *     message InspectTemplate {
   *       option (google.api.resource) = {
   *         type: "dlp.googleapis.com/InspectTemplate"
   *         pattern:
   *         "organizations/{organization}/inspectTemplates/{inspect_template}"
   *         pattern: "projects/{project}/inspectTemplates/{inspect_template}"
   *         history: ORIGINALLY_SINGLE_PATTERN
   *       };
   *     }
   *
   * @generated from field: google.api.ResourceDescriptor.History history = 4;
   */
  history: ResourceDescriptor_History;

  /**
   * The plural name used in the resource name and permission names, such as
   * 'projects' for the resource name of 'projects/{project}' and the permission
   * name of 'cloudresourcemanager.googleapis.com/projects.get'. One exception
   * to this is for Nested Collections that have stuttering names, as defined
   * in [AIP-122](https://google.aip.dev/122#nested-collections), where the
   * collection ID in the resource name pattern does not necessarily directly
   * match the `plural` value.
   *
   * It is the same concept of the `plural` field in k8s CRD spec
   * https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/
   *
   * Note: The plural form is required even for singleton resources. See
   * https://aip.dev/156
   *
   * @generated from field: string plural = 5;
   */
  plural: string;

  /**
   * The same concept of the `singular` field in k8s CRD spec
   * https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/
   * Such as "project" for the `resourcemanager.googleapis.com/Project` type.
   *
   * @generated from field: string singular = 6;
   */
  singular: string;

  /**
   * Style flag(s) for this resource.
   * These indicate that a resource is expected to conform to a given
   * style. See the specific style flags for additional information.
   *
   * @generated from field: repeated google.api.ResourceDescriptor.Style style = 10;
   */
  style: ResourceDescriptor_Style[];
};

/**
 * Describes the message google.api.ResourceDescriptor.
 * Use `create(ResourceDescriptorSchema)` to create a new message.
 */
export const ResourceDescriptorSchema: GenMessage<ResourceDescriptor> = /*@__PURE__*/
  messageDesc(file_google_api_resource, 0);

/**
 * A description of the historical or future-looking state of the
 * resource pattern.
 *
 * @generated from enum google.api.ResourceDescriptor.History
 */
export enum ResourceDescriptor_History {
  /**
   * The "unset" value.
   *
   * @generated from enum value: HISTORY_UNSPECIFIED = 0;
   */
  HISTORY_UNSPECIFIED = 0,

  /**
   * The resource originally had one pattern and launched as such, and
   * additional patterns were added later.
   *
   * @generated from enum value: ORIGINALLY_SINGLE_PATTERN = 1;
   */
  ORIGINALLY_SINGLE_PATTERN = 1,

  /**
   * The resource has one pattern, but the API owner expects to add more
   * later. (This is the inverse of ORIGINALLY_SINGLE_PATTERN, and prevents
   * that from being necessary once there are multiple patterns.)
   *
   * @generated from enum value: FUTURE_MULTI_PATTERN = 2;
   */
  FUTURE_MULTI_PATTERN = 2,
}

/**
 * Describes the enum google.api.ResourceDescriptor.History.
 */
export const ResourceDescriptor_HistorySchema: GenEnum<ResourceDescriptor_History> = /*@__PURE__*/
  enumDesc(file_google_api_resource, 0, 0);

/**
 * A flag representing a specific style that a resource claims to conform to.
 *
 * @generated from enum google.api.ResourceDescriptor.Style
 */
export enum ResourceDescriptor_Style {
  /**
   * The unspecified value. Do not use.
   *
   * @generated from enum value: STYLE_UNSPECIFIED = 0;
   */
  STYLE_UNSPECIFIED = 0,

  /**
   * This resource is intended to be "declarative-friendly".
   *
   * Declarative-friendly resources must be more strictly consistent, and
   * setting this to true communicates to tools that this resource should
   * adhere to declarative-friendly expectations.
   *
   * Note: This is used by the API linter (linter.aip.dev) to enable
   * additional checks.
   *
   * @generated from enum value: DECLARATIVE_FRIENDLY = 1;
   */
  DECLARATIVE_FRIENDLY = 1,
}

/**
 * Describes the enum google.api.ResourceDescriptor.Style.
 */
export const ResourceDescriptor_StyleSchema: GenEnum<ResourceDescriptor_Style> = /*@__PURE__*/
  enumDesc(file_google_api_resource, 0, 1);

/**
 * Defines a proto annotation that describes a string field that refers to
 * an API resource.
 *
 * @generated from message google.api.ResourceReference
 */
export type ResourceReference = Message<"google.api.ResourceReference"> & {
  /**
   * The resource type that the annotated field references.
   *
   * Example:
   *
   *     message Subscription {
   *       string topic = 2 [(google.api.resource_reference) = {
   *         type: "pubsub.googleapis.com/Topic"
   *       }];
   *     }
   *
   * Occasionally, a field may reference an arbitrary resource. In this case,
   * APIs use the special value * in their resource reference.
   *
   * Example:
   *
   *     message GetIamPolicyRequest {
   *       string resource = 2 [(google.api.resource_reference) = {
   *         type: "*"
   *       }];
   *     }
   *
   * @generated from field: string type = 1;
   */
  type: string;

  /**
   * The resource type of a child collection that the annotated field
   * references. This is useful for annotating the `parent` field that
   * doesn't have a fixed resource type.
   *
   * Example:
   *
   *     message ListLogEntriesRequest {
   *       string parent = 1 [(google.api.resource_reference) = {
   *         child_type: "logging.googleapis.com/LogEntry"
   *       };
   *     }
   *
   * @generated from field: string child_type = 2;
   */
  childType: string;
};

/**
 * Describes the message google.api.ResourceReference.
 * Use `create(ResourceReferenceSchema)` to create a new message.
 */
export const ResourceReferenceSchema: GenMessage<ResourceReference> = /*@__PURE__*/
  messageDesc(file_google_api_resource, 1);

/**
 * An annotation that describes a resource reference, see
 * [ResourceReference][].
 *
 * @generated from extension: google.api.ResourceReference resource_reference = 1055;
 */
export const resource_reference: GenExtension<FieldOptions, ResourceReference> = /*@__PURE__*/
  extDesc(file_google_api_resource, 0);

/**
 * An annotation that describes a resource definition without a corresponding
 * message; see [ResourceDescriptor][].
 *
 * @generated from extension: repeated google.api.ResourceDescriptor resource_definition = 1053;
 */
export const resource_definition: GenExtension<FileOptions, ResourceDescriptor[]> = /*@__PURE__*/
  extDesc(file_google_api_resource, 1);

/**
 * An annotation that describes a resource definition, see
 * [ResourceDescriptor][].
 *
 * @generated from extension: google.api.ResourceDescriptor resource = 1053;
 */
export const resource: GenExtension<MessageOptions, ResourceDescriptor> = /*@__PURE__*/
  extDesc(file_google_api_resource, 2);

