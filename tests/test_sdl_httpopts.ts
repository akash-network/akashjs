import tap from "tap";

import { SDL } from '../src/sdl';

const testSDL = `version: '2.0'
services:
  tetris:
    image: bsord/tetris
    expose:
      - port: 80
        http_options:
          max_body_size: 104857600
          read_timeout: 50
          send_timeout: 100
          next_tries: 24
          next_timeout: 48
          next_cases:
            - "500"
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
      count: 1`;

const testManifest = [
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
              "MaxBodySize": 104857600,
              "ReadTimeout": 50,
              "SendTimeout": 100,
              "NextTries": 24,
              "NextTimeout": 48,
              "NextCases": [
                "500"
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

tap.test("SDL: Manifest w/ HTTP options", async (t) => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL);
  const result = sdl.manifest();
  const expected = testManifest;

  t.same(result, expected, "Manifest matches expected result");
});