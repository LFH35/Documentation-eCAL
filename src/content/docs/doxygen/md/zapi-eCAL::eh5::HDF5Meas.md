---
title: 2. class eCAL::eh5::HDF5Meas
---

eCAL HDF5 measurement API

# Members

### `public  `[`HDF5Meas`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a38a4a05c222d89a299585e495d176dd3)`()` 

Constructor.

### `public  explicit `[`HDF5Meas`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a0bd5ff2dc2f13c544494a7745581c55b)`(const std::string & path,eAccessType access)` 

Constructor.

#### Parameters
* `path` Input file path / measurement directory path (see meas directory structure description bellow, in Open method). 

* `access` Access type

### `public  `[`~HDF5Meas`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a8586f7c715d04371ec47be6d039dcf16)`()` 

Destructor.

### `public  `[`HDF5Meas`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a046f3d909593b00d712062426f20b903)`(const `[`HDF5Meas`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas)` & other) = delete` 

Copy constructor deleted.

### `public `[`HDF5Meas`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas)` & `[`operator=`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a8f21de8290b9e61ef3dca8a29f143998)`(const `[`HDF5Meas`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas)` & other) = delete` 

Move assignemnt deleted.

### `public  `[`HDF5Meas`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1aa6bd4a1ae6a3bed9579b3a26cb6af4c1)`(`[`HDF5Meas`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas)` &&) = default` 

Move constructor.

### `public `[`HDF5Meas`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas)` & `[`operator=`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a7e7bae6a1c1d218fe8fe16f3f91ee16b)`(`[`HDF5Meas`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas)` &&) = default` 

Move assignment.

### `public bool `[`Open`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1aecad4114488fb039cb4a7887caaa5c25)`(const std::string & path,eAccessType access)` 

Open file.

#### Parameters
* `path` Input file path / measurement directory path.             Default measurement directory structure:
             - root directory e.g.: M:\measurement_directory\measurement01
             - documents directory:                                |_doc
             - hosts directories:                                  |_Host1 (e.g.: CARPC01)
                                                                   |_Host2 (e.g.: CARPC02)

            File path as input (eAccessType::RDONLY):
             - root directory (e.g.: M:\measurement_directory\measurement01) in this case all hosts subdirectories will be iterated,
             - host directory (e.g.: M:\measurement_directory\measurement01\CARPC01),
             - file path, path to file from measurement (e.g.: M:\measurement_directory\measurement01\CARPC01\meas01_05.hdf5).

            File path as output (eAccessType::CREATE):
             - full path to  measurement directory (recommended with host name) (e.g.: M:\measurement_directory\measurement01\CARPC01),
             - to set the name of the actual hdf5 file use SetFileBaseName method.

* `access` Access type

#### Returns
true if output (eAccessType::CREATE) measurement directory structure can be accessed/created, false otherwise. true if input (eAccessType::RDONLY) measurement/file path was opened, false otherwise.

### `public bool `[`Close`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1abeed7e30c0dfe2c99fcea3dddc5b131a)`()` 

Close file.

#### Returns
true if succeeds, false if it fails

### `public bool `[`IsOk`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1aca4422176c24284ea24d694e545d8f68)`() const` 

Checks if file/measurement is ok.

#### Returns
true if meas can be opened(read) or location is accessible(write), false otherwise

### `public std::string `[`GetFileVersion`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1aeafef45016e17fabfd091af5663d95ef)`() const` 

Get the File Type Version of the current opened file.

#### Returns
file version

### `public size_t `[`GetMaxSizePerFile`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a674c3533cd6269ac88ff3f9a88e1791a)`() const` 

Gets maximum allowed size for an individual file.

#### Returns
maximum size in MB

### `public void `[`SetMaxSizePerFile`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a5c12487539acba0e4396535ad50550e1)`(size_t size)` 

Sets maximum allowed size for an individual file.

#### Parameters
* `size` maximum size in MB

### `public bool `[`IsOneFilePerChannelEnabled`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a523090bd0f77a4438efd42676474dedd)`() const` 

Whether each Channel shall be writte in its own file.

When enabled, data is clustered by channel and each channel is written to its own file. The filenames will consist of the basename and the channel name.

#### Returns
true, if one file per channel is enabled

### `public void `[`SetOneFilePerChannelEnabled`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1ab6d20e5ca90bcf043e351490bc066b11)`(bool enabled)` 

Enable / disable the creation of one individual file per channel.

When enabled, data is clustered by channel and each channel is written to its own file. The filenames will consist of the basename and the channel name.

#### Parameters
* `enabled` Whether one file shall be created per channel

### `public std::set< std::string > `[`GetChannelNames`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1aaaaf77dbb3707d2016e622d67b8f351f)`() const` 

Get the available channel names of the current opened file / measurement.

#### Returns
channel names

### `public bool `[`HasChannel`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1ae7433e76c418f226fd448a52a801e2b8)`(const std::string & channel_name) const` 

Check if channel exists in measurement.

#### Parameters
* `channel_name` name of the channel

#### Returns
true if exists, false otherwise

### `public std::string `[`GetChannelDescription`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1ab068cdb97d707afe1317f6ab5cbd1e69)`(const std::string & channel_name) const` 

Get the channel description for the given channel.

#### Parameters
* `channel_name` channel name

#### Returns
channel description

### `public void `[`SetChannelDescription`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1aadf74bed883a202b76a9f556b3ba16f7)`(const std::string & channel_name,const std::string & description)` 

Set description of the given channel.

#### Parameters
* `channel_name` channel name 

* `description` description of the channel

### `public std::string `[`GetChannelType`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a9ba7555055d7df49f2e73874979e7825)`(const std::string & channel_name) const` 

Gets the channel type of the given channel.

#### Parameters
* `channel_name` channel name

#### Returns
channel type

### `public void `[`SetChannelType`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1ae4f937af73235f7058ca81139f6cc213)`(const std::string & channel_name,const std::string & type)` 

Set type of the given channel.

#### Parameters
* `channel_name` channel name 

* `type` type of the channel

### `public long long `[`GetMinTimestamp`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a3265977aa86b989c4cb9ee4358b35206)`(const std::string & channel_name) const` 

Gets minimum timestamp for specified channel.

#### Parameters
* `channel_name` channel name

#### Returns
minimum timestamp value

### `public long long `[`GetMaxTimestamp`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a72eb031080a9cc9976241cfa83219cac)`(const std::string & channel_name) const` 

Gets maximum timestamp for specified channel.

#### Parameters
* `channel_name` channel name

#### Returns
maximum timestamp value

### `public bool `[`GetEntriesInfo`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a988501cbee4f7c2e692302956be166c3)`(const std::string & channel_name,EntryInfoSet & entries) const` 

Gets the header info for all data entries for the given channel Header = timestamp + entry id.

#### Parameters
* `channel_name` channel name 

* `entries` header info for all data entries

#### Returns
true if succeeds, false if it fails

### `public bool `[`GetEntriesInfoRange`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a3e410806eaca9ec637b28a48d94ae13e)`(const std::string & channel_name,long long begin,long long end,EntryInfoSet & entries) const` 

Gets the header info for data entries for the given channel included in given time range (begin->end) Header = timestamp + entry id.

#### Parameters
* `channel_name` channel name 

* `begin` time range begin timestamp 

* `end` time range end timestamp 

* `entries` header info for data entries in given range

#### Returns
true if succeeds, false if it fails

### `public bool `[`GetEntryDataSize`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1ae5662887a20255c6b963c4f191dd102d)`(long long entry_id,size_t & size) const` 

Gets data size of a specific entry.

#### Parameters
* `entry_id` Entry ID 

* `size` Entry data size

#### Returns
true if succeeds, false if it fails

### `public bool `[`GetEntryData`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1ac228c71238443288a0a271e7d059626e)`(long long entry_id,void * data) const` 

Gets data from a specific entry.

#### Parameters
* `entry_id` Entry ID 

* `data` Entry data

#### Returns
true if succeeds, false if it fails

### `public void `[`SetFileBaseName`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1afe55bd6d747fd940242f5a21e03a36a6)`(const std::string & base_name)` 

Set measurement file base name (desired name for the actual hdf5 files that will be created)

#### Parameters
* `base_name` Name of the hdf5 files that will be created.

### `public bool `[`AddEntryToFile`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a6385d17c35fe657d698b743ce1ce35a5)`(const void * data,const unsigned long long & size,const long long & snd_timestamp,const long long & rcv_timestamp,const std::string & channel_name,long long id,long long clock)` 

Add entry to file.

#### Parameters
* `data` data to be added 

* `size` size of the data 

* `snd_timestamp` send time stamp 

* `rcv_timestamp` receive time stamp 

* `channel_name` channel name 

* `id` message id 

* `clock` message clock

#### Returns
true if succeeds, false if it fails

### `public void `[`ConnectPreSplitCallback`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1adc707f792475c9d03a1b5be24d40e198)`(`[`CallbackFunction`](src/content/docs/doxygen/md/zapi-CallbackFunction.md#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a54dbaccb69979d75e6542d1f62b9c314)` cb)` 

Connect callback for pre file split notification.

#### Parameters
* `cb` callback function

### `public void `[`DisconnectPreSplitCallback`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a54e3462d02dad69d9ed9c4ecb1a133fa)`()` 

Disconnect pre file split callback.

### `typedef `[`CallbackFunction`](#d6/d43/classeCAL_1_1eh5_1_1HDF5Meas_1a54dbaccb69979d75e6542d1f62b9c314) 

Callback function type for pre file split notification.

