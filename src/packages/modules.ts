//
// This file has been autogenerated by goffi-gen. DO NOT EDIT IT MANUALLY!
//

export interface GetModulesIn {
}

export interface GetModulesOut {
    items: Module[];
}

export interface Module {
    name: string;
}

export interface UpdateIn {
}

export interface UpdateOut {
    commitHash: string;
    didUpdate:  boolean;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toGetModulesIn(json: string): GetModulesIn {
        return cast(JSON.parse(json), r("GetModulesIn"));
    }

    public static getModulesInToJson(value: GetModulesIn): string {
        return JSON.stringify(uncast(value, r("GetModulesIn")), null, 2);
    }

    public static toGetModulesOut(json: string): GetModulesOut {
        return cast(JSON.parse(json), r("GetModulesOut"));
    }

    public static getModulesOutToJson(value: GetModulesOut): string {
        return JSON.stringify(uncast(value, r("GetModulesOut")), null, 2);
    }

    public static toUpdateIn(json: string): UpdateIn {
        return cast(JSON.parse(json), r("UpdateIn"));
    }

    public static updateInToJson(value: UpdateIn): string {
        return JSON.stringify(uncast(value, r("UpdateIn")), null, 2);
    }

    public static toUpdateOut(json: string): UpdateOut {
        return cast(JSON.parse(json), r("UpdateOut"));
    }

    public static updateOutToJson(value: UpdateOut): string {
        return JSON.stringify(uncast(value, r("UpdateOut")), null, 2);
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
    "GetModulesIn": o([
    ], false),
    "GetModulesOut": o([
        { json: "items", js: "items", typ: a(r("Module")) },
    ], false),
    "Module": o([
        { json: "name", js: "name", typ: "" },
    ], false),
    "UpdateIn": o([
    ], false),
    "UpdateOut": o([
        { json: "commitHash", js: "commitHash", typ: "" },
        { json: "didUpdate", js: "didUpdate", typ: true },
    ], false),
};

import { callNativeFunction } from "../lib";
import { Convert as ErrorConvert } from "../error";

function getModules(args: GetModulesIn): Promise<GetModulesOut> {
  return new Promise((resolve, reject) => {
    const argsJsonStr = Convert.getModulesInToJson(args);
    const resultJsonStr = callNativeFunction("modules", "getModules", argsJsonStr);
    try {
      resolve(Convert.toGetModulesOut(resultJsonStr));
    } catch {
      reject(ErrorConvert.toStakError(resultJsonStr));
    }
  });
}

function update(args: UpdateIn): Promise<UpdateOut> {
  return new Promise((resolve, reject) => {
    const argsJsonStr = Convert.updateInToJson(args);
    const resultJsonStr = callNativeFunction("modules", "update", argsJsonStr);
    try {
      resolve(Convert.toUpdateOut(resultJsonStr));
    } catch {
      reject(ErrorConvert.toStakError(resultJsonStr));
    }
  });
}

export const modules = {
  getModules,
  update,
}