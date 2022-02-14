import { Response } from "node-fetch";
import tap from "tap";

import { asJSON, createRequestBody, getResponseValue, wrapHttpPost } from "../src/rpc";

tap.test('RPC: getResponseValue returns value as encoded buffer', (t) => {
    t.plan(1);

    const test = {
        result: {
            response: {
                value: "FF"
            }
        }
    }

    getResponseValue(test as any)
        .then(value => t.ok(Buffer.from("FF", "base64").equals(value)))
});

tap.test('RPC: getResponseValue rejects if value is missing', (t) => {
    t.plan(1);

    const test = {}

    getResponseValue(test as any)
        .catch(err => t.pass())
});

tap.test('RPC: asJSON calls the json method on a response object', (t) => {
    t.plan(1);

    const res = new Response('{"foo":"bar"}')

    asJSON(res)
        .then(value => t.same(value, { foo: "bar" }))
});

tap.test('RPC: createRequestBody correctly wraps params', (t) => {
    t.plan(1);

    createRequestBody("some.service", "Method", Buffer.from("abc", "base64"))
        .then(request => t.same(request, {
            jsonrpc: "2.0",
            id: 0,
            method: "abci_query",
            params: {
                data: "69b7",
                height: "0",
                path: "/some.service/Method",
                prove: false,
            },
        }))
})

tap.test('RPC: wrapHttpPost correctly wrap body', (t) => {
    t.plan(1);

    const post = wrapHttpPost({ foo: "bar" });

    t.same(post, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: "{\"foo\":\"bar\"}"
    });
})