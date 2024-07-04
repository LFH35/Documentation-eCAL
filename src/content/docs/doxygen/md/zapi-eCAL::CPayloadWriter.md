---
title: 2. class eCAL::CPayloadWriter
---

Base payload writer class to allow zero copy memory operations.

This class serves as the base class for payload writers, allowing zero-copy memory operations. The `WriteFull` and `WriteModified` calls may operate on the target memory file directly in zero-copy mode.

A partial writing / modification of the memory file is only possible when zero-copy mode is activated. If zero-copy is not enabled, the `WriteModified` method is ignored and the `WriteFull` method is always executed (see [CPublisher::ShmEnableZeroCopy](doxygen/md/zapi-ShmEnableZeroCopy.md#dc/d42/classeCAL_1_1CPublisher_1af057c139ad7f40fe6574e095f5ff806c))

# Members

### `public  `[`CPayloadWriter`](#dd/db1/classeCAL_1_1CPayloadWriter_1a287a1a3c0424f5998915cea0cde1c326)`() = default` 

Default constructor for [CPayloadWriter](#dd/db1/classeCAL_1_1CPayloadWriter).

### `public virtual  `[`~CPayloadWriter`](#dd/db1/classeCAL_1_1CPayloadWriter_1aa534d3e9315ab097cdc3d4e9332676ae)`() = default` 

Virtual destructor for [CPayloadWriter](#dd/db1/classeCAL_1_1CPayloadWriter).

### `public  `[`CPayloadWriter`](#dd/db1/classeCAL_1_1CPayloadWriter_1a5e0811d56d7ceb8f0ca3c52b98d17cdd)`(const `[`CPayloadWriter`](#dd/db1/classeCAL_1_1CPayloadWriter)` &) = default` 

Copy constructor (deleted).

### `public  `[`CPayloadWriter`](#dd/db1/classeCAL_1_1CPayloadWriter_1a110b6503c24323c369277ce51daa1710)`(`[`CPayloadWriter`](#dd/db1/classeCAL_1_1CPayloadWriter)` &&) = default` 

Move constructor (deleted).

### `public `[`CPayloadWriter`](#dd/db1/classeCAL_1_1CPayloadWriter)` & `[`operator=`](#dd/db1/classeCAL_1_1CPayloadWriter_1ac56421da31ffcf6b902536a4755bf818)`(const `[`CPayloadWriter`](#dd/db1/classeCAL_1_1CPayloadWriter)` &) = default` 

Copy assignment operator (deleted).

### `public `[`CPayloadWriter`](#dd/db1/classeCAL_1_1CPayloadWriter)` & `[`operator=`](#dd/db1/classeCAL_1_1CPayloadWriter_1a61bd311744ce4c5ee82e78d1e7d985cd)`(`[`CPayloadWriter`](#dd/db1/classeCAL_1_1CPayloadWriter)` &&) = default` 

Move assignment operator (deleted).

### `public bool `[`WriteFull`](#dd/db1/classeCAL_1_1CPayloadWriter_1a2d4fd3818680de453cf3ac755338bb2c)`(void * buffer_,size_t size_)` 

Perform a full write operation on uninitialized memory.

This virtual function allows derived classes to perform a full write operation when the provisioned memory is uninitialized. Typically, this is the case when a memory file had to be recreated or its size had to be changed.

#### Parameters
* `buffer_` Pointer to the buffer containing the data to be written. 

* `size_` Size of the data to be written.

#### Returns
True if the write operation is successful, false otherwise.

### `public inline virtual bool `[`WriteModified`](#dd/db1/classeCAL_1_1CPayloadWriter_1a17324d2f99cb72e720910208458b368c)`(void * buffer_,size_t size_)` 

Perform a partial write operation to modify existing data.

This virtual function allows derived classes to modify existing data when the provisioned memory is already initialized by a WriteFull call (i.e. contains the data from that full write operation).

The memory can be partially modified and does not have to be completely rewritten, which leads to significantly higher performance (lower latency).

If not implemented (by default), this operation will just call the `WriteFull` function.

#### Parameters
* `buffer_` Pointer to the buffer containing the data to be modified. 

* `size_` Size of the data to be modified.

#### Returns
True if the write/update operation is successful, false otherwise.

### `public size_t `[`GetSize`](#dd/db1/classeCAL_1_1CPayloadWriter_1a32092e1db64f84bd86429df86824835c)`()` 

Get the size of the required memory.

This virtual function allows derived classes to provide the size of the memory that eCAL needs to allocate.

#### Returns
The size of the required memory.

