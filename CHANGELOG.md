## [0.11.1](https://github.com/akash-network/akashjs/compare/v0.11.0...v0.11.1) (2025-06-27)


### Bug Fixes

* updates deps ([e4c9e87](https://github.com/akash-network/akashjs/commit/e4c9e87ef28b61ab36b9c000f295a45894e53b37))

## [0.11.0](https://github.com/akash-network/akashjs/compare/v0.10.1...v0.11.0) (2025-01-20)


### Features

* Add JSDoc comments with examples to ValidationError and SdlValidationError classes ([c7788e5](https://github.com/akash-network/akashjs/commit/c7788e5e73b45e5b060ba07ed7260cc8995de037))
* Add JSDoc comments with examples to ValidationError and SdlValidationError classes ([916cf7c](https://github.com/akash-network/akashjs/commit/916cf7ce7306cbab7fc854ffb24d595709ad45f9))
* **examples:** improve documentation ([#117](https://github.com/akash-network/akashjs/issues/117)) ([16cb3c3](https://github.com/akash-network/akashjs/commit/16cb3c3d4b19da5377ddce27c682aced404c6112))

## [0.10.1](https://github.com/akash-network/akashjs/compare/v0.10.0...v0.10.1) (2024-11-20)


### Bug Fixes

* update cosmjs deps ([2cc50f0](https://github.com/akash-network/akashjs/commit/2cc50f093b9dd8bffef1081df2d02f9e82c2aa7a)), closes [#105](https://github.com/akash-network/akashjs/issues/105)

## [0.10.0](https://github.com/akash-network/akashjs/compare/v0.9.2...v0.10.0) (2024-05-17)


### Features

* **sdl:** add storage and gpu validation ([b125da7](https://github.com/akash-network/akashjs/commit/b125da727a437aff7118d7c9683673384e2738da)), closes [akash-network/cloudmos#133](https://github.com/akash-network/cloudmos/issues/133)

## [0.9.2](https://github.com/akash-network/akashjs/compare/v0.9.1...v0.9.2) (2024-05-15)


### Bug Fixes

* **certificates:** add deprecated types ([a4a632f](https://github.com/akash-network/akashjs/commit/a4a632ff075dd37a1067d3633ded331b79c59f45)), closes [akash-network/akashjs#76](https://github.com/akash-network/akashjs/issues/76)

## [0.9.1](https://github.com/akash-network/akashjs/compare/v0.9.0...v0.9.1) (2024-05-14)


### Bug Fixes

* **api:** rollback deprecated protobuf generated code ([4d2479d](https://github.com/akash-network/akashjs/commit/4d2479d3695e858deff48675a6faec6208474632)), closes [akash-network/cloudmos#184](https://github.com/akash-network/cloudmos/issues/184)

## [0.9.0](https://github.com/akash-network/akashjs/compare/v0.8.1...v0.9.0) (2024-05-13)


### Features

* **certificates:** implement certificate manager ([1da68e8](https://github.com/akash-network/akashjs/commit/1da68e87782ccd368ee2ef5fef546a576fa47dbb)), closes [akash-network/akashjs#76](https://github.com/akash-network/akashjs/issues/76)


### Bug Fixes

* **certificates:** adjust cert fields names ([21699d8](https://github.com/akash-network/akashjs/commit/21699d8122996ea75f12d18d7c78276a3abcb595)), closes [akash-network/akashjs#76](https://github.com/akash-network/akashjs/issues/76)

## [0.8.1](https://github.com/akash-network/akashjs/compare/v0.8.0...v0.8.1) (2024-05-13)


### Bug Fixes

* **sdl:** fallback credentials email to an empty string ([4657dc5](https://github.com/akash-network/akashjs/commit/4657dc571f7164328c96d0092a7e93ec41fbc56a)), closes [akash-network/cloudmos#133](https://github.com/akash-network/cloudmos/issues/133)

## [0.8.0](https://github.com/akash-network/akashjs/compare/v0.7.1...v0.8.0) (2024-05-10)


### Features

* **api:** move deployment relations and ip lease validation from cloudmos ([a7eb767](https://github.com/akash-network/akashjs/commit/a7eb7672a04225201cc71b2ca4256a15fb28448e)), closes [akash-network/cloudmos#133](https://github.com/akash-network/cloudmos/issues/133)
* **sdl:** implement service image credentials ([06a73e8](https://github.com/akash-network/akashjs/commit/06a73e8fa507c5d005a5b92cbc77e29e5ed69967)), closes [akash-network/cloudmos#168](https://github.com/akash-network/cloudmos/issues/168)
* **sdl:** move denom validation from cloudmos to sdl ([#133](https://github.com/akash-network/akashjs/issues/133)) ([1b5362f](https://github.com/akash-network/akashjs/commit/1b5362f2e3b3067b2fbe3a9bf1d8119a01461de1))
* **sdl:** move endpoint validation from cloudmos ([#133](https://github.com/akash-network/akashjs/issues/133)) ([0b770ec](https://github.com/akash-network/akashjs/commit/0b770ece33d5ea6e12acef3b9e1e3b60457ae305))

## [0.7.1](https://github.com/akash-network/akashjs/compare/v0.7.0...v0.7.1) (2024-05-07)


### Bug Fixes

* **certificates:** properly import lib ([5bb78af](https://github.com/akash-network/akashjs/commit/5bb78af350f4f609424506e9b5fbe0f8a958d85b)), closes [akash-network/akashjs#76](https://github.com/akash-network/akashjs/issues/76)

## [0.7.0](https://github.com/akash-network/akashjs/compare/v0.6.3...v0.7.0) (2024-05-07)


### Features

* **api:** use deprecated generated code from akash-api ([b95352f](https://github.com/akash-network/akashjs/commit/b95352fae17646548b896a1d6cbc27edf14463bc)), closes [akash-network/support#184](https://github.com/akash-network/support/issues/184)

## [0.6.3](https://github.com/akash-network/akashjs/compare/v0.6.2...v0.6.3) (2024-05-03)


### Bug Fixes

* prevent duplicate persistent attribute when using ram storage ([6a821ef](https://github.com/akash-network/akashjs/commit/6a821efde40540fb33e9ec54073c82012d14f168))

## [0.6.2](https://github.com/akash-network/akashjs/compare/v0.6.1...v0.6.2) (2024-05-02)


### Bug Fixes

* patch to add credentials null to fix live deployments ([#84](https://github.com/akash-network/akashjs/issues/84)) ([51a325e](https://github.com/akash-network/akashjs/commit/51a325ebd8bcc60e613d81a626f90eb9364b50a3))

## [0.6.1](https://github.com/akash-network/akashjs/compare/v0.6.0...v0.6.1) (2024-04-29)


### Bug Fixes

* add required persistent attribute when using ram class storage ([edd205b](https://github.com/akash-network/akashjs/commit/edd205be195cee317b4cdf2aab4ec6a5d3b28c02))

## [0.6.0](https://github.com/akash-network/akashjs/compare/v0.5.11...v0.6.0) (2024-04-22)


### Features

* **api:** uses akash-api protobuf generated files instead of local ones ([#184](https://github.com/akash-network/akashjs/issues/184)) ([aca6673](https://github.com/akash-network/akashjs/commit/aca6673b4fdf3bd1b52e080a620a79bd09d7217b))
