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
// @generated from file google/type/dayofweek.proto (package google.type, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file google/type/dayofweek.proto.
 */
export const file_google_type_dayofweek: GenFile = /*@__PURE__*/
  fileDesc("Chtnb29nbGUvdHlwZS9kYXlvZndlZWsucHJvdG8SC2dvb2dsZS50eXBlKoQBCglEYXlPZldlZWsSGwoXREFZX09GX1dFRUtfVU5TUEVDSUZJRUQQABIKCgZNT05EQVkQARILCgdUVUVTREFZEAISDQoJV0VETkVTREFZEAMSDAoIVEhVUlNEQVkQBBIKCgZGUklEQVkQBRIMCghTQVRVUkRBWRAGEgoKBlNVTkRBWRAHQq4BCg9jb20uZ29vZ2xlLnR5cGVCDkRheW9md2Vla1Byb3RvUAFaPmdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvdHlwZS9kYXlvZndlZWs7ZGF5b2Z3ZWVrogIDR1RYqgILR29vZ2xlLlR5cGXKAgtHb29nbGVcVHlwZeICF0dvb2dsZVxUeXBlXEdQQk1ldGFkYXRh6gIMR29vZ2xlOjpUeXBlYgZwcm90bzM");

/**
 * Represents a day of the week.
 *
 * @generated from enum google.type.DayOfWeek
 */
export enum DayOfWeek {
  /**
   * The day of the week is unspecified.
   *
   * @generated from enum value: DAY_OF_WEEK_UNSPECIFIED = 0;
   */
  DAY_OF_WEEK_UNSPECIFIED = 0,

  /**
   * Monday
   *
   * @generated from enum value: MONDAY = 1;
   */
  MONDAY = 1,

  /**
   * Tuesday
   *
   * @generated from enum value: TUESDAY = 2;
   */
  TUESDAY = 2,

  /**
   * Wednesday
   *
   * @generated from enum value: WEDNESDAY = 3;
   */
  WEDNESDAY = 3,

  /**
   * Thursday
   *
   * @generated from enum value: THURSDAY = 4;
   */
  THURSDAY = 4,

  /**
   * Friday
   *
   * @generated from enum value: FRIDAY = 5;
   */
  FRIDAY = 5,

  /**
   * Saturday
   *
   * @generated from enum value: SATURDAY = 6;
   */
  SATURDAY = 6,

  /**
   * Sunday
   *
   * @generated from enum value: SUNDAY = 7;
   */
  SUNDAY = 7,
}

/**
 * Describes the enum google.type.DayOfWeek.
 */
export const DayOfWeekSchema: GenEnum<DayOfWeek> = /*@__PURE__*/
  enumDesc(file_google_type_dayofweek, 0);

