# tedge-collectd-setup

Default collectd configuration for thin-edge.io. It includes sensible collectd defaults settings and enables/starts the related services such as collectd and tedge-mapper-collectd.

This is a community driven repository where users are encouraged to create PRs to add support for any additional init system, or make changes to any of the existing definitions.

## Plugin summary

The following thin-edge.io customization is included in the plugin.

### What will be deployed to the device?

* install and configure collectd
* enable/start the `collectd` service
* enable/start the `tedge-mapper-collectd` service

**Technical summary**

The following details the technical aspects of the plugin to get an idea what systems it supports.

|||
|--|--|
|**Languages**|`shell` (posix compatible)|
|**CPU Architectures**|`all/noarch`|
|**Supported init systems**|`systemd` and `init.d/open-rc`|
|**Required Dependencies**|-|
|**Optional Dependencies (feature specific)**|-|

### How to do I get it?

The following linux package formats are provided on the releases page and also in the [tedge-community](https://cloudsmith.io/~thinedge/repos/community/packages/) repository:

|Operating System|Repository link|
|--|--|
|Debian/Raspbian (deb)|[![Latest version of 'tedge-collectd-setup' @ Cloudsmith](https://api-prd.cloudsmith.io/v1/badges/version/thinedge/community/deb/tedge-collectd-setup/latest/a=all;d=any-distro%252Fany-version;t=binary/?render=true&show_latest=true)](https://cloudsmith.io/~thinedge/repos/community/packages/detail/deb/tedge-collectd-setup/latest/a=all;d=any-distro%252Fany-version;t=binary/)|
|Alpine Linux (apk)|[![Latest version of 'tedge-collectd-setup' @ Cloudsmith](https://api-prd.cloudsmith.io/v1/badges/version/thinedge/community/alpine/tedge-collectd-setup/latest/a=noarch;d=alpine%252Fany-version/?render=true&show_latest=true)](https://cloudsmith.io/~thinedge/repos/community/packages/detail/alpine/tedge-collectd-setup/latest/a=noarch;d=alpine%252Fany-version/)|
|RHEL/CentOS/Fedora (rpm)|[![Latest version of 'tedge-collectd-setup' @ Cloudsmith](https://api-prd.cloudsmith.io/v1/badges/version/thinedge/community/rpm/tedge-collectd-setup/latest/a=noarch;d=any-distro%252Fany-version;t=binary/?render=true&show_latest=true)](https://cloudsmith.io/~thinedge/repos/community/packages/detail/rpm/tedge-collectd-setup/latest/a=noarch;d=any-distro%252Fany-version;t=binary/)|

## Features

The following features are supported by the plugin:

* Configure collectd and the related thin-edge.io mapper

## Acknowledgements

[![Hosted By: Cloudsmith](https://img.shields.io/badge/OSS%20hosting%20by-cloudsmith-blue?logo=cloudsmith&style=for-the-badge)](https://cloudsmith.com)

Package repository hosting is graciously provided by  [Cloudsmith](https://cloudsmith.com).
Cloudsmith is the only fully hosted, cloud-native, universal package management solution, that
enables your organization to create, store and share packages in any format, to any place, with total
confidence.
