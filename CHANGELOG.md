# Changelog

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: [SemVer](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Clone and pin URLs point at `hipness/fire`. The npm package is still `lonefox`.
- Sample post and default `site.description` no longer call this a webhome.
- `@font-face` rules that pointed at missing files were removed. System fonts still apply.

### Removed

- Unused `badge` field on posts.

### Added

- GitHub Actions CI: `astro check` then `build` on `main`.
