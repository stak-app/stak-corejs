//
// This file has been autogenerated by goffi-gen. DO NOT EDIT IT MANUALLY!
//

export interface InfoIn {
}

export interface InfoOut {
    apiToken: string;
    userId:   string;
    userName: string;
}

export interface LoginIn {
}

export interface LoginOut {
}

export interface LogoutIn {
    skipRevoke: boolean;
}

export interface LogoutOut {
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toInfoIn(json: string): InfoIn {
        return cast(JSON.parse(json), r("InfoIn"));
    }

    public static infoInToJson(value: InfoIn): string {
        return JSON.stringify(uncast(value, r("InfoIn")), null, 2);
    }

    public static toInfoOut(json: string): InfoOut {
        return cast(JSON.parse(json), r("InfoOut"));
    }

    public static infoOutToJson(value: InfoOut): string {
        return JSON.stringify(uncast(value, r("InfoOut")), null, 2);
    }

    public static toLoginIn(json: string): LoginIn {
        return cast(JSON.parse(json), r("LoginIn"));
    }

    public static loginInToJson(value: LoginIn): string {
        return JSON.stringify(uncast(value, r("LoginIn")), null, 2);
    }

    public static toLoginOut(json: string): LoginOut {
        return cast(JSON.parse(json), r("LoginOut"));
    }

    public static loginOutToJson(value: LoginOut): string {
        return JSON.stringify(uncast(value, r("LoginOut")), null, 2);
    }

    public static toLogoutIn(json: string): LogoutIn {
        return cast(JSON.parse(json), r("LogoutIn"));
    }

    public static logoutInToJson(value: LogoutIn): string {
        return JSON.stringify(uncast(value, r("LogoutIn")), null, 2);
    }

    public static toLogoutOut(json: string): LogoutOut {
        return cast(JSON.parse(json), r("LogoutOut"));
    }

    public static logoutOutToJson(value: LogoutOut): string {
        return JSON.stringify(uncast(value, r("LogoutOut")), null, 2);
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
    "InfoIn": o([
    ], false),
    "InfoOut": o([
        { json: "apiToken", js: "apiToken", typ: "" },
        { json: "userId", js: "userId", typ: "" },
        { json: "userName", js: "userName", typ: "" },
    ], false),
    "LoginIn": o([
    ], false),
    "LoginOut": o([
    ], false),
    "LogoutIn": o([
        { json: "skipRevoke", js: "skipRevoke", typ: true },
    ], false),
    "LogoutOut": o([
    ], false),
};

import { callNativeFunction } from "../lib";
import { Convert as ErrorConvert } from "../error";

function info(args: InfoIn): Promise<InfoOut> {
  return new Promise((resolve, reject) => {
    const argsJsonStr = Convert.infoInToJson(args);
    const resultJsonStr = callNativeFunction("auth", "info", argsJsonStr);
    try {
      resolve(Convert.toInfoOut(resultJsonStr));
    } catch {
      reject(ErrorConvert.toStakError(resultJsonStr));
    }
  });
}

function login(args: LoginIn): Promise<LoginOut> {
  return new Promise((resolve, reject) => {
    const argsJsonStr = Convert.loginInToJson(args);
    const resultJsonStr = callNativeFunction("auth", "login", argsJsonStr);
    try {
      resolve(Convert.toLoginOut(resultJsonStr));
    } catch {
      reject(ErrorConvert.toStakError(resultJsonStr));
    }
  });
}

function logout(args: LogoutIn): Promise<LogoutOut> {
  return new Promise((resolve, reject) => {
    const argsJsonStr = Convert.logoutInToJson(args);
    const resultJsonStr = callNativeFunction("auth", "logout", argsJsonStr);
    try {
      resolve(Convert.toLogoutOut(resultJsonStr));
    } catch {
      reject(ErrorConvert.toStakError(resultJsonStr));
    }
  });
}

export const auth = {
  info,
  login,
  logout,
}