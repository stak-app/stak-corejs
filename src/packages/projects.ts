//
// This file has been autogenerated by goffi-gen. DO NOT EDIT IT MANUALLY!
//

export interface CloneRepositoryIn {
    projectName:    string;
    sshPassphrase?: string;
}

export interface CloneRepositoryOut {
    workspaceDirectory: string;
}

export interface FetchDevEnvironmentIn {
    workspaceDirectory: string;
}

export interface FetchDevEnvironmentOut {
}

export interface GetProjectIn {
    name: string;
}

export interface GetProjectOut {
    item: GetProjectOutItem;
}

export interface GetProjectOutItem {
    availableCommands:   string[];
    createdAt:           Date;
    displayName:         string;
    fullName:            string;
    group:               PurpleGroup;
    id:                  string;
    name:                string;
    repository:          PurpleRepository;
    type:                string;
    updatedAt:           Date;
    workspaceDirectory?: string;
}

export interface PurpleGroup {
    id:   string;
    name: string;
}

export interface PurpleRepository {
    type: Type;
    url:  string;
}

export enum Type {
    Bitbucket = "bitbucket",
    Custom = "custom",
    Github = "github",
    Gitlab = "gitlab",
}

export interface GetProjectsIn {
}

export interface GetProjectsOut {
    items: ItemElement[];
}

export interface ItemElement {
    availableCommands:   string[];
    createdAt:           Date;
    displayName:         string;
    fullName:            string;
    group:               FluffyGroup;
    id:                  string;
    name:                string;
    repository:          FluffyRepository;
    type:                string;
    updatedAt:           Date;
    workspaceDirectory?: string;
}

export interface FluffyGroup {
    id:   string;
    name: string;
}

export interface FluffyRepository {
    type: Type;
    url:  string;
}

export interface InitDevEnvironmentIn {
    workspaceDirectory: string;
}

export interface InitDevEnvironmentOut {
}

export interface RemoveProjectIn {
    projectName: string;
}

export interface RemoveProjectOut {
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toCloneRepositoryIn(json: string): CloneRepositoryIn {
        return cast(JSON.parse(json), r("CloneRepositoryIn"));
    }

    public static cloneRepositoryInToJson(value: CloneRepositoryIn): string {
        return JSON.stringify(uncast(value, r("CloneRepositoryIn")), null, 2);
    }

    public static toCloneRepositoryOut(json: string): CloneRepositoryOut {
        return cast(JSON.parse(json), r("CloneRepositoryOut"));
    }

    public static cloneRepositoryOutToJson(value: CloneRepositoryOut): string {
        return JSON.stringify(uncast(value, r("CloneRepositoryOut")), null, 2);
    }

    public static toFetchDevEnvironmentIn(json: string): FetchDevEnvironmentIn {
        return cast(JSON.parse(json), r("FetchDevEnvironmentIn"));
    }

    public static fetchDevEnvironmentInToJson(value: FetchDevEnvironmentIn): string {
        return JSON.stringify(uncast(value, r("FetchDevEnvironmentIn")), null, 2);
    }

    public static toFetchDevEnvironmentOut(json: string): FetchDevEnvironmentOut {
        return cast(JSON.parse(json), r("FetchDevEnvironmentOut"));
    }

    public static fetchDevEnvironmentOutToJson(value: FetchDevEnvironmentOut): string {
        return JSON.stringify(uncast(value, r("FetchDevEnvironmentOut")), null, 2);
    }

    public static toGetProjectIn(json: string): GetProjectIn {
        return cast(JSON.parse(json), r("GetProjectIn"));
    }

    public static getProjectInToJson(value: GetProjectIn): string {
        return JSON.stringify(uncast(value, r("GetProjectIn")), null, 2);
    }

    public static toGetProjectOut(json: string): GetProjectOut {
        return cast(JSON.parse(json), r("GetProjectOut"));
    }

    public static getProjectOutToJson(value: GetProjectOut): string {
        return JSON.stringify(uncast(value, r("GetProjectOut")), null, 2);
    }

    public static toGetProjectsIn(json: string): GetProjectsIn {
        return cast(JSON.parse(json), r("GetProjectsIn"));
    }

    public static getProjectsInToJson(value: GetProjectsIn): string {
        return JSON.stringify(uncast(value, r("GetProjectsIn")), null, 2);
    }

    public static toGetProjectsOut(json: string): GetProjectsOut {
        return cast(JSON.parse(json), r("GetProjectsOut"));
    }

    public static getProjectsOutToJson(value: GetProjectsOut): string {
        return JSON.stringify(uncast(value, r("GetProjectsOut")), null, 2);
    }

    public static toInitDevEnvironmentIn(json: string): InitDevEnvironmentIn {
        return cast(JSON.parse(json), r("InitDevEnvironmentIn"));
    }

    public static initDevEnvironmentInToJson(value: InitDevEnvironmentIn): string {
        return JSON.stringify(uncast(value, r("InitDevEnvironmentIn")), null, 2);
    }

    public static toInitDevEnvironmentOut(json: string): InitDevEnvironmentOut {
        return cast(JSON.parse(json), r("InitDevEnvironmentOut"));
    }

    public static initDevEnvironmentOutToJson(value: InitDevEnvironmentOut): string {
        return JSON.stringify(uncast(value, r("InitDevEnvironmentOut")), null, 2);
    }

    public static toRemoveProjectIn(json: string): RemoveProjectIn {
        return cast(JSON.parse(json), r("RemoveProjectIn"));
    }

    public static removeProjectInToJson(value: RemoveProjectIn): string {
        return JSON.stringify(uncast(value, r("RemoveProjectIn")), null, 2);
    }

    public static toRemoveProjectOut(json: string): RemoveProjectOut {
        return cast(JSON.parse(json), r("RemoveProjectOut"));
    }

    public static removeProjectOutToJson(value: RemoveProjectOut): string {
        return JSON.stringify(uncast(value, r("RemoveProjectOut")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "CloneRepositoryIn": o([
        { json: "projectName", js: "projectName", typ: "" },
        { json: "sshPassphrase", js: "sshPassphrase", typ: u(undefined, "") },
    ], false),
    "CloneRepositoryOut": o([
        { json: "workspaceDirectory", js: "workspaceDirectory", typ: "" },
    ], false),
    "FetchDevEnvironmentIn": o([
        { json: "workspaceDirectory", js: "workspaceDirectory", typ: "" },
    ], false),
    "FetchDevEnvironmentOut": o([
    ], false),
    "GetProjectIn": o([
        { json: "name", js: "name", typ: "" },
    ], false),
    "GetProjectOut": o([
        { json: "item", js: "item", typ: r("GetProjectOutItem") },
    ], false),
    "GetProjectOutItem": o([
        { json: "availableCommands", js: "availableCommands", typ: a("") },
        { json: "createdAt", js: "createdAt", typ: Date },
        { json: "displayName", js: "displayName", typ: "" },
        { json: "fullName", js: "fullName", typ: "" },
        { json: "group", js: "group", typ: r("PurpleGroup") },
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "repository", js: "repository", typ: r("PurpleRepository") },
        { json: "type", js: "type", typ: "" },
        { json: "updatedAt", js: "updatedAt", typ: Date },
        { json: "workspaceDirectory", js: "workspaceDirectory", typ: u(undefined, "") },
    ], false),
    "PurpleGroup": o([
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
    ], false),
    "PurpleRepository": o([
        { json: "type", js: "type", typ: r("Type") },
        { json: "url", js: "url", typ: "" },
    ], false),
    "GetProjectsIn": o([
    ], false),
    "GetProjectsOut": o([
        { json: "items", js: "items", typ: a(r("ItemElement")) },
    ], false),
    "ItemElement": o([
        { json: "availableCommands", js: "availableCommands", typ: a("") },
        { json: "createdAt", js: "createdAt", typ: Date },
        { json: "displayName", js: "displayName", typ: "" },
        { json: "fullName", js: "fullName", typ: "" },
        { json: "group", js: "group", typ: r("FluffyGroup") },
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "repository", js: "repository", typ: r("FluffyRepository") },
        { json: "type", js: "type", typ: "" },
        { json: "updatedAt", js: "updatedAt", typ: Date },
        { json: "workspaceDirectory", js: "workspaceDirectory", typ: u(undefined, "") },
    ], false),
    "FluffyGroup": o([
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
    ], false),
    "FluffyRepository": o([
        { json: "type", js: "type", typ: r("Type") },
        { json: "url", js: "url", typ: "" },
    ], false),
    "InitDevEnvironmentIn": o([
        { json: "workspaceDirectory", js: "workspaceDirectory", typ: "" },
    ], false),
    "InitDevEnvironmentOut": o([
    ], false),
    "RemoveProjectIn": o([
        { json: "projectName", js: "projectName", typ: "" },
    ], false),
    "RemoveProjectOut": o([
    ], false),
    "Type": [
        "bitbucket",
        "custom",
        "github",
        "gitlab",
    ],
};

import { callNativeFunction } from "../lib";
import { Convert as ErrorConvert } from "../error";

function cloneRepository(args: CloneRepositoryIn): Promise<CloneRepositoryOut> {
  return new Promise((resolve, reject) => {
    const argsJsonStr = Convert.cloneRepositoryInToJson(args);
    const resultJsonStr = callNativeFunction("projects", "cloneRepository", argsJsonStr);
    try {
      resolve(Convert.toCloneRepositoryOut(resultJsonStr));
    } catch {
      reject(ErrorConvert.toStakError(resultJsonStr));
    }
  });
}

function fetchDevEnvironment(args: FetchDevEnvironmentIn): Promise<FetchDevEnvironmentOut> {
  return new Promise((resolve, reject) => {
    const argsJsonStr = Convert.fetchDevEnvironmentInToJson(args);
    const resultJsonStr = callNativeFunction("projects", "fetchDevEnvironment", argsJsonStr);
    try {
      resolve(Convert.toFetchDevEnvironmentOut(resultJsonStr));
    } catch {
      reject(ErrorConvert.toStakError(resultJsonStr));
    }
  });
}

function getProject(args: GetProjectIn): Promise<GetProjectOut> {
  return new Promise((resolve, reject) => {
    const argsJsonStr = Convert.getProjectInToJson(args);
    const resultJsonStr = callNativeFunction("projects", "getProject", argsJsonStr);
    try {
      resolve(Convert.toGetProjectOut(resultJsonStr));
    } catch {
      reject(ErrorConvert.toStakError(resultJsonStr));
    }
  });
}

function getProjects(args: GetProjectsIn): Promise<GetProjectsOut> {
  return new Promise((resolve, reject) => {
    const argsJsonStr = Convert.getProjectsInToJson(args);
    const resultJsonStr = callNativeFunction("projects", "getProjects", argsJsonStr);
    try {
      resolve(Convert.toGetProjectsOut(resultJsonStr));
    } catch {
      reject(ErrorConvert.toStakError(resultJsonStr));
    }
  });
}

function initDevEnvironment(args: InitDevEnvironmentIn): Promise<InitDevEnvironmentOut> {
  return new Promise((resolve, reject) => {
    const argsJsonStr = Convert.initDevEnvironmentInToJson(args);
    const resultJsonStr = callNativeFunction("projects", "initDevEnvironment", argsJsonStr);
    try {
      resolve(Convert.toInitDevEnvironmentOut(resultJsonStr));
    } catch {
      reject(ErrorConvert.toStakError(resultJsonStr));
    }
  });
}

function removeProject(args: RemoveProjectIn): Promise<RemoveProjectOut> {
  return new Promise((resolve, reject) => {
    const argsJsonStr = Convert.removeProjectInToJson(args);
    const resultJsonStr = callNativeFunction("projects", "removeProject", argsJsonStr);
    try {
      resolve(Convert.toRemoveProjectOut(resultJsonStr));
    } catch {
      reject(ErrorConvert.toStakError(resultJsonStr));
    }
  });
}

export const projects = {
  cloneRepository,
  fetchDevEnvironment,
  getProject,
  getProjects,
  initDevEnvironment,
  removeProject,
}