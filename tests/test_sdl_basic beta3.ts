import tap from "tap";

import { SDL } from '../src/sdl';

const testSDL = `version: '2.0'
services:
  tetris:
    image: bsord/tetris
    expose:
      - port: 80
        as: 80
        to:
          - global: true
profiles:
  compute:
    tetris:
      resources:
        cpu:
          units: 1
        memory:
          size: 512Mi
        storage:
          - size: 512Mi
  placement:
    akash:
      attributes:
        host: akash
      signedBy:
        anyOf:
          - akash1365yvmc4s7awdyj3n2sav7xfx76adc6dnmlx63
          - akash18qa2a2ltfyvkyj0ggj3hkvuj6twzyumuaru9s4
      pricing:
        tetris:
          denom: uakt
          amount: 10000
deployment:
  tetris:
    akash:
      profile: tetris
      count: 1
`;

const expectedManifest = [
  {
    "Name": "akash",
    "Services": [
      {
        "Name": "tetris",
        "Image": "bsord/tetris",
        "Command": null,
        "Args": null,
        "Env": null,
        "Resources": {
          "cpu": {
            "units": {
              "val": "1000"
            }
          },
          "gpu": {
            "units": {
              "val": "0"
            }
          },
          "memory": {
            "size": {
              "val": "536870912"
            }
          },
          "storage": [
            {
              "name": "default",
              "size": {
                "val": "536870912"
              }
            }
          ],
          "endpoints": null
        },
        "Count": 1,
        "Expose": [
          {
            "Port": 80,
            "ExternalPort": 80,
            "Proto": "TCP",
            "Service": "",
            "Global": true,
            "Hosts": null,
            "HTTPOptions": {
              "MaxBodySize": 1048576,
              "ReadTimeout": 60000,
              "SendTimeout": 60000,
              "NextTries": 3,
              "NextTimeout": 0,
              "NextCases": [
                "error",
                "timeout"
              ]
            },
            "IP": "",
            "EndpointSequenceNumber": 0
          }
        ]
      }
    ]
  }
];

const expectedGroups = [
  {
    "name": "akash",
    "requirements": {
      "attributes": [
        {
          "key": "host",
          "value": "akash"
        }
      ],
      "signed_by": {
        "all_of": [],
        "any_of": [
          "akash1365yvmc4s7awdyj3n2sav7xfx76adc6dnmlx63",
          "akash18qa2a2ltfyvkyj0ggj3hkvuj6twzyumuaru9s4"
        ]
      }
    },
    "resources": [
      {
        "resources": {
          "cpu": {
            "units": {
              "val": new Uint8Array([
                49,
                48,
                48,
                48
              ])
            },
            "attributes": undefined,
          },
          "memory": {
            "quantity": {
              "val": new Uint8Array([
                53,
                51,
                54,
                56,
                55,
                48,
                57,
                49,
                50
              ]),
            },
            "attributes": undefined,
          },
          "storage": [
            {
              "name": "default",
              "quantity": {
                "val": new Uint8Array([
                  53,
                  51,
                  54,
                  56,
                  55,
                  48,
                  57,
                  49,
                  50
                ]),
              },
              "attributes": undefined,
            }
          ],
          "gpu": {
            "units": {
              "val": new Uint8Array([
                48
              ]),
            },
            "attributes": undefined,
          },
          "endpoints": [
            {
              "kind": 0,
              "sequence_number": 0
            }
          ]
        },
        "price": {
          "denom": "uakt",
          "amount": "10000"
        },
        "count": 1
      }
    ]
  }
];

const expectedPreVersionJson = '[{"Name":"akash","Services":[{"Args":null,"Command":null,"Count":1,"Env":null,"Expose":[{"EndpointSequenceNumber":0,"ExternalPort":80,"Global":true,"HTTPOptions":{"MaxBodySize":1048576,"NextCases":["error","timeout"],"NextTimeout":0,"NextTries":3,"ReadTimeout":60000,"SendTimeout":60000},"Hosts":null,"IP":"","Port":80,"Proto":"TCP","Service":""}],"Image":"bsord/tetris","Name":"tetris","Resources":{"cpu":{"units":{"val":"1000"}},"endpoints":null,"gpu":{"units":{"val":"0"}},"memory":{"size":{"val":"536870912"}},"storage":[{"name":"default","size":{"val":"536870912"}}]}}]}]';

const expectedVersion = new Uint8Array([
  198, 76, 53, 149, 9, 159, 56, 22,
  10, 75, 181, 229, 10, 244, 170, 160,
  183, 205, 227, 198, 175, 48, 251, 108,
  126, 97, 183, 237, 170, 199, 231, 199
]);

tap.test("SDL: fromString", async (t) => {
  t.plan(2);

  const sdl = SDL.fromString(testSDL, 'beta3');

  t.ok(sdl instanceof SDL, "Default SDL is not undefined");
  t.ok(sdl.data !== null, "SDL has data object");
});

tap.test("SDL: Manifest", async (t) => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL, 'beta3');
  const result = sdl.manifest();
  const expected = expectedManifest;

  t.same(result, expected, "Manifest matches expected result");
});

tap.test("SDL: DeploymentGroups", async (t) => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL, 'beta3');
  const result = sdl.groups();
  const expected = expectedGroups;

  t.same(result, expected, "Deployment groups matches expected result");
});

tap.test("SDL: Version", async (t) => {
  t.plan(2);

  const formatHelper = (arg: string) => {
    try {
      return JSON.stringify(JSON.parse(arg), null, 2);
    } catch (e) {
      console.error('Error parsing JSON', e)
      console.error(arg.slice(565, 600))
      return arg;
    }
  }

  const sdl = SDL.fromString(testSDL, 'beta3');
  const preVersionJson = sdl.manifestSortedJSON();
  const result = await sdl.manifestVersion();
  const expected = expectedVersion;

  console.log(result.join(', '))

  t.same(
    formatHelper(preVersionJson),
    formatHelper(expectedPreVersionJson),
    'Manifest pre-encoding JSON matches'
  );

  t.same(result, expected, "Manifest version matches expected result");
});