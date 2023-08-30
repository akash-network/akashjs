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
        gpu:
          units: 0
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
        "resource": {
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
            },
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
              "sequence_number": 0
            }
          ],
          "id": 1,
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

tap.test("SDL: fromString", async (t) => {
  t.plan(2);

  const sdl = SDL.fromString(testSDL, 'beta3');

  t.ok(sdl instanceof SDL, "Default SDL is not undefined");
  t.ok(sdl.data !== null, "SDL has data object");
});

tap.test("SDL: DeploymentGroups", async (t) => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL, 'beta3');
  const result = sdl.groups();
  const expected = expectedGroups;

  t.same(result, expected, "Deployment groups matches expected result");
});