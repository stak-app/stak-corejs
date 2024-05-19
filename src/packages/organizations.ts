//
// This file has been autogenerated by goffi-gen. DO NOT EDIT IT MANUALLY!
//

export interface GetCurrentOrganizationIn {
}

export interface GetCurrentOrganizationOut {
    orgName: string;
}

export interface GetOrganizationsIn {
}

export interface GetOrganizationsOut {
    orgs: OrgInfo[];
}

export interface OrgInfo {
    orgDisplayName: string;
    orgId:          string;
    orgName:        string;
}

export interface SwitchOrganizationIn {
    orgName: string;
}

export interface SwitchOrganizationOut {
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toGetCurrentOrganizationIn(json: string): GetCurrentOrganizationIn {
        return cast(JSON.parse(json), r("GetCurrentOrganizationIn"));
    }

    public static getCurrentOrganizationInToJson(value: GetCurrentOrganizationIn): string {
        return JSON.stringify(uncast(value, r("GetCurrentOrganizationIn")), null, 2);
    }

    public static toGetCurrentOrganizationOut(json: string): GetCurrentOrganizationOut {
        return cast(JSON.parse(json), r("GetCurrentOrganizationOut"));
    }

    public static getCurrentOrganizationOutToJson(value: GetCurrentOrganizationOut): string {
        return JSON.stringify(uncast(value, r("GetCurrentOrganizationOut")), null, 2);
    }

    public static toGetOrganizationsIn(json: string): GetOrganizationsIn {
        return cast(JSON.parse(json), r("GetOrganizationsIn"));
    }

    public static getOrganizationsInToJson(value: GetOrganizationsIn): string {
        return JSON.stringify(uncast(value, r("GetOrganizationsIn")), null, 2);
    }

    public static toGetOrganizationsOut(json: string): GetOrganizationsOut {
        return cast(JSON.parse(json), r("GetOrganizationsOut"));
    }

    public static getOrganizationsOutToJson(value: GetOrganizationsOut): string {
        return JSON.stringify(uncast(value, r("GetOrganizationsOut")), null, 2);
    }

    public static toSwitchOrganizationIn(json: string): SwitchOrganizationIn {
        return cast(JSON.parse(json), r("SwitchOrganizationIn"));
    }

    public static switchOrganizationInToJson(value: SwitchOrganizationIn): string {
        return JSON.stringify(uncast(value, r("SwitchOrganizationIn")), null, 2);
    }

    public static toSwitchOrganizationOut(json: string): SwitchOrganizationOut {
        return cast(JSON.parse(json), r("SwitchOrganizationOut"));
    }

    public static switchOrganizationOutToJson(value: SwitchOrganizationOut): string {
        return JSON.stringify(uncast(value, r("SwitchOrganizationOut")), null, 2);
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
    "GetCurrentOrganizationIn": o([
    ], false),
    "GetCurrentOrganizationOut": o([
        { json: "orgName", js: "orgName", typ: "" },
    ], false),
    "GetOrganizationsIn": o([
    ], false),
    "GetOrganizationsOut": o([
        { json: "orgs", js: "orgs", typ: a(r("OrgInfo")) },
    ], false),
    "OrgInfo": o([
        { json: "orgDisplayName", js: "orgDisplayName", typ: "" },
        { json: "orgId", js: "orgId", typ: "" },
        { json: "orgName", js: "orgName", typ: "" },
    ], false),
    "SwitchOrganizationIn": o([
        { json: "orgName", js: "orgName", typ: "" },
    ], false),
    "SwitchOrganizationOut": o([
    ], false),
};

import { callNativeFunction } from "../lib";
import { Convert as ErrorConvert } from "../error";

function getCurrentOrganization(args: GetCurrentOrganizationIn): Promise<GetCurrentOrganizationOut> {
  return new Promise((resolve, reject) => {
    const argsJsonStr = Convert.getCurrentOrganizationInToJson(args);
    const resultJsonStr = callNativeFunction("organizations", "getCurrentOrganization", argsJsonStr);
    try {
      resolve(Convert.toGetCurrentOrganizationOut(resultJsonStr));
    } catch {
      reject(ErrorConvert.toStakError(resultJsonStr));
    }
  });
}

function getOrganizations(args: GetOrganizationsIn): Promise<GetOrganizationsOut> {
  return new Promise((resolve, reject) => {
    const argsJsonStr = Convert.getOrganizationsInToJson(args);
    const resultJsonStr = callNativeFunction("organizations", "getOrganizations", argsJsonStr);
    try {
      resolve(Convert.toGetOrganizationsOut(resultJsonStr));
    } catch {
      reject(ErrorConvert.toStakError(resultJsonStr));
    }
  });
}

function switchOrganization(args: SwitchOrganizationIn): Promise<SwitchOrganizationOut> {
  return new Promise((resolve, reject) => {
    const argsJsonStr = Convert.switchOrganizationInToJson(args);
    const resultJsonStr = callNativeFunction("organizations", "switchOrganization", argsJsonStr);
    try {
      resolve(Convert.toSwitchOrganizationOut(resultJsonStr));
    } catch {
      reject(ErrorConvert.toStakError(resultJsonStr));
    }
  });
}

export const organizations = {
  getCurrentOrganization,
  getOrganizations,
  switchOrganization,
}