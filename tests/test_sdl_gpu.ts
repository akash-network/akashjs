import tap from "tap";

import { SDL } from '../src/sdl';

const testSDL = `version: "2.0"
services:
  web:
    image: nginx
    expose:
      - port: 80
        accept:
          - ahostname.com
        to:
          - global: true
      - port: 12345
        to:
          - global: true
        proto: udp
profiles:
  compute:
    web:
      resources:
        cpu:
          units: "100m"
        gpu:
          units: 1
          attributes:
            vendor:
              nvidia:
              - model: a100
        memory:
          size: "128Mi"
        storage:
        - size: "1Gi"
  placement:
    westcoast:
      attributes:
        region: us-west
        blalbla: foo
      signedBy:
        anyOf:
          - 1
          - 2
        allOf:
          - 3
          - 4
      pricing:
        web:
          denom: uakt
          amount: 50
deployment:
  web:
    westcoast:
      profile: web
      count: 2
`;

const expectedManifest = [
  {
    "name": "westcoast",
    "services": [
      {
        "name": "web",
        "image": "nginx",
        "command": null,
        "args": null,
        "env": null,
        "resources": {
          "cpu": {
            "units": {
              "val": "100"
            }
          },
          "memory": {
            "size": {
              "val": "134217728"
            }
          },
          "storage": [
            {
              "name": "default",
              "size": {
                "val": "1073741824"
              }
            }
          ],
          "gpu": {
            "units": {
              "val": "1"
            },
            "attributes": [
              {
                "key": "vendor/nvidia/model/a100",
                "value": "true"
              }
            ]
          },
          "endpoints": null
        },
        "count": 2,
        "expose": [
          {
            "port": 80,
            "externalPort": 0,
            "proto": "TCP",
            "service": "",
            "global": true,
            "hosts": [
              "ahostname.com"
            ],
            "httpOptions": {
              "maxBodySize": 1048576,
              "readTimeout": 60000,
              "sendTimeout": 60000,
              "nextTries": 3,
              "nextTimeout": 0,
              "nextCases": [
                "error",
                "timeout"
              ]
            },
            "ip": "",
            "endpointSequenceNumber": 0
          },
          {
            "port": 12345,
            "externalPort": 0,
            "proto": "UDP",
            "service": "",
            "global": true,
            "hosts": null,
            "httpOptions": {
              "maxBodySize": 1048576,
              "readTimeout": 60000,
              "sendTimeout": 60000,
              "nextTries": 3,
              "nextTimeout": 0,
              "nextCases": [
                "error",
                "timeout"
              ]
            },
            "ip": "",
            "endpointSequenceNumber": 0
          }
        ],
        "params": null
      }
    ]
  }
];

const expectedVersion = new Uint8Array([
  209,  23,  37, 232,  15, 222, 208, 180,
   21, 218, 104, 115,   8, 164, 232, 103,
  220, 198, 139, 187,  10, 159, 246, 151,
  237,  27, 125, 216, 196,   5, 153,  62
]);

tap.test("SDL: GPU Manifest", async (t) => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL, 'beta3');
  const result = sdl.manifest();
  const expected = expectedManifest;

  t.same(result, expected, "Manifest matches expected result");
});

tap.test("SDL: GPU Version", async (t) => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL, 'beta3');
  const result = await sdl.manifestVersion();
  const expected = expectedVersion;

  t.same(result, expected, "Manifest version matches expected result");
});