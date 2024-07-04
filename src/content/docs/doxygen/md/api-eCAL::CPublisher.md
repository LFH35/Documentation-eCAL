---
title: eCAL::CPublisher class
---

## class `eCAL::CPublisher` {#dc/d42/classeCAL_1_1CPublisher}

eCAL publisher class.

The [CPublisher](#dc/d42/classeCAL_1_1CPublisher) class is used to send topics to matching eCAL subscribers. The topic is created automatically by the constructor or by the Create member function. 
 For sending the topic payload the publisher class provides an overloaded Send method. The first one is sending the payload as a std::string. The second needs a preallocated buffer described by a buffer address and a buffer length. The publisher is not taking the ownership for the allocated memory buffer. 
 An optional time stamp can be attached to the topic payload. 
```cpp
// create publisher, topic name "A"
eCAL::CPublisher pub("A");

// send string
std::string send_s = "Hello World ";

// send content
size_t snd_len = pub.Send(send_s);
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher_1aeec7c85875f2c620315a878cda238c53)`()` | Constructor.
`public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher_1ada151b4279624922e103fe0c36c5fc76)`(const std::string & topic_name_,const std::string & topic_type_,const std::string & topic_desc_)` | Constructor.
`public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher_1a504c55b1883606f3ea948a3642c409cc)`(const std::string & topic_name_,const `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` | Constructor.
`public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher_1a96fadf431f080e3a87af932daf580032)`(const std::string & topic_name_)` | Constructor.
`public virtual ECAL_API `[`~CPublisher`](#dc/d42/classeCAL_1_1CPublisher_1a1a2979f4b0e461334e4030953fe7218a)`()` | Destructor.
`public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher_1a1c29f699017455282cb467ae8536c592)`(const `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher)` &) = delete` | CPublishers are non-copyable.
`public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher)` & `[`operator=`](#dc/d42/classeCAL_1_1CPublisher_1ad5b9e7d8d31b03009169a74df203237b)`(const `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher)` &) = delete` | CPublishers are non-copyable.
`public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher_1a654085c2a3760965cca316fc9c82117b)`(`[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher)` && rhs) noexcept` | CPublishers are move-enabled.
`public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher)` & `[`operator=`](#dc/d42/classeCAL_1_1CPublisher_1a8c455bcb6e8d0cfcc3b75ba552223709)`(`[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher)` && rhs) noexcept` | CPublishers are move-enabled.
`public ECAL_API bool `[`Create`](#dc/d42/classeCAL_1_1CPublisher_1ad47ccd97b3ea5c93ff8307fbb78e3287)`(const std::string & topic_name_,const std::string & topic_type_,const std::string & topic_desc_)` | Creates this object.
`public ECAL_API bool `[`Create`](#dc/d42/classeCAL_1_1CPublisher_1abf94f945976e3b9c0a65a8f17199006f)`(const std::string & topic_name_,const `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` | Creates this object.
`public inline ECAL_API bool `[`Create`](#dc/d42/classeCAL_1_1CPublisher_1ac21dbd9ebcab1e0e476f9602e7c48e56)`(const std::string & topic_name_)` | Creates this object.
`public ECAL_API bool `[`Destroy`](#dc/d42/classeCAL_1_1CPublisher_1ab7d83d1ac37f8887c1cd9a1eccbca352)`()` | Destroys this object.
`public ECAL_API bool `[`SetTypeName`](#dc/d42/classeCAL_1_1CPublisher_1a3e7c32e9a4a11c9259e26dbccd5e996d)`(const std::string & topic_type_name_)` | Setup topic type name.
`public ECAL_API bool `[`SetDescription`](#dc/d42/classeCAL_1_1CPublisher_1ad87a26fdf303329647a2c9fb0c865c11)`(const std::string & topic_desc_)` | Setup topic description.
`public ECAL_API bool `[`SetDataTypeInformation`](#dc/d42/classeCAL_1_1CPublisher_1aad7aed589c12253ff805c795b9106b39)`(const `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` | Setup topic information.
`public ECAL_API bool `[`SetAttribute`](#dc/d42/classeCAL_1_1CPublisher_1a02e676312007e8917ffd9b9ffc1a777a)`(const std::string & attr_name_,const std::string & attr_value_)` | Sets publisher attribute.
`public ECAL_API bool `[`ClearAttribute`](#dc/d42/classeCAL_1_1CPublisher_1a01cb058cadfeaa8403a52a6b2bbb3225)`(const std::string & attr_name_)` | Removes publisher attribute.
`public ECAL_API bool `[`ShareType`](#dc/d42/classeCAL_1_1CPublisher_1ac80396f79fdcf4dc3426948dc6c30988)`(bool state_)` | Share topic type.
`public ECAL_API bool `[`ShareDescription`](#dc/d42/classeCAL_1_1CPublisher_1a5a928f8e02f5cb1fc2c428e2207bb720)`(bool state_)` | Share topic description.
`public ECAL_API bool `[`SetQOS`](#dc/d42/classeCAL_1_1CPublisher_1a7742362c6bd52a5cf4bf5432402beaf1)`(const `[`QOS::SWriterQOS`](src/content/docs/doxygen/md/api-eCAL::QOS::SWriterQOS.md#d1/d85/structeCAL_1_1QOS_1_1SWriterQOS)` & qos_)` | Set publisher quality of service attributes.
`public ECAL_API `[`QOS::SWriterQOS`](src/content/docs/doxygen/md/api-eCAL::QOS::SWriterQOS.md#d1/d85/structeCAL_1_1QOS_1_1SWriterQOS)` `[`GetQOS`](#dc/d42/classeCAL_1_1CPublisher_1a16b531c461127e2e22ef6fe02fcf79b9)`()` | Get current publisher quality of service attributes.
`public ECAL_API bool `[`SetLayerMode`](#dc/d42/classeCAL_1_1CPublisher_1a679db56f8d6bb28f94ef9f356158680f)`(`[`TLayer::eTransportLayer`](src/content/docs/doxygen/md/api-eTransportLayer.md#d4/dd8/ecal__tlayer_8h_1a65b651c8133a86e4850afa99db69a59a)` layer_,`[`TLayer::eSendMode`](src/content/docs/doxygen/md/api-eSendMode.md#d4/dd8/ecal__tlayer_8h_1ae475e842a5ad28c0104f9558e9bdb91a)` mode_)` | Set publisher send mode for specific transport layer.
`public ECAL_API bool `[`SetMaxBandwidthUDP`](#dc/d42/classeCAL_1_1CPublisher_1a59e4fe88875ec6498d82174840e6b19c)`(long bandwidth_)` | Set publisher maximum transmit bandwidth for the udp layer.
`public ECAL_API bool `[`ShmSetBufferCount`](#dc/d42/classeCAL_1_1CPublisher_1af489ade9595abe747ec0067fb78c1a3f)`(long buffering_)` | Set publisher maximum number of used shared memory buffers.
`public ECAL_API bool `[`ShmEnableZeroCopy`](#dc/d42/classeCAL_1_1CPublisher_1af057c139ad7f40fe6574e095f5ff806c)`(bool state_)` | Enable zero copy shared memory transport mode.
`public ECAL_API bool `[`ShmSetAcknowledgeTimeout`](#dc/d42/classeCAL_1_1CPublisher_1a809dab69596b6f4632bcf0b5d68b4eef)`(long long acknowledge_timeout_ms_)` | Force connected subscribers to send acknowledge event after processing the message and block publisher send call on this event with a timeout.
`public template<>`  <br/>`inline bool `[`ShmSetAcknowledgeTimeout`](#dc/d42/classeCAL_1_1CPublisher_1aa82567ba534ba4d25ffd87a18ac92160)`(std::chrono::duration< Rep, Period > acknowledge_timeout_)` | Force connected subscribers to send acknowledge event after processing the message and block publisher send call on this event with a timeout.
`public ECAL_API bool `[`SetID`](#dc/d42/classeCAL_1_1CPublisher_1a1098fe2ca3ac7c8dae5f9845c000b16b)`(long long id_)` | Set the specific topic id.
`public ECAL_API size_t `[`Send`](#dc/d42/classeCAL_1_1CPublisher_1acbea7ac61cfb86ca5a939e281a89285f)`(const void * buf_,size_t len_,long long time_) const` | Send a message to all subscribers.
`public ECAL_API size_t `[`Send`](#dc/d42/classeCAL_1_1CPublisher_1a5f97c75cbcaeb7bd31e451560d473103)`(`[`CPayloadWriter`](src/content/docs/doxygen/md/api-eCAL::CPayloadWriter.md#dd/db1/classeCAL_1_1CPayloadWriter)` & payload_,long long time_) const` | Send a message to all subscribers.
`public ECAL_API size_t `[`Send`](#dc/d42/classeCAL_1_1CPublisher_1afd1b28d92fda2ff899d1adbad4ea0d44)`(const void * buf_,size_t len_,long long time_,long long acknowledge_timeout_ms_) const` | Send a message to all subscribers synchronized with acknowledge timeout (see also ShmSetAcknowledgeTimeout).
`public inline ECAL_API size_t `[`SendSynchronized`](#dc/d42/classeCAL_1_1CPublisher_1ac2ee785a29c8fa2a85efe873b085005a)`(const void *const buf_,size_t len_,long long time_,long long acknowledge_timeout_ms_) const` | Send a message to all subscribers synchronized with acknowledge timeout (see also ShmSetAcknowledgeTimeout).
`public ECAL_API size_t `[`Send`](#dc/d42/classeCAL_1_1CPublisher_1a8fd0663b7117ca27c70b3ddac16c60e8)`(`[`CPayloadWriter`](src/content/docs/doxygen/md/api-eCAL::CPayloadWriter.md#dd/db1/classeCAL_1_1CPayloadWriter)` & payload_,long long time_,long long acknowledge_timeout_ms_) const` | Send a message to all subscribers synchronized with acknowledge timeout (see also ShmSetAcknowledgeTimeout).
`public inline ECAL_API size_t `[`Send`](#dc/d42/classeCAL_1_1CPublisher_1ad3fc32ad6ebf11fad1a1aa1281eabeae)`(const std::string & s_,long long time_) const` | Send a message to all subscribers.
`public inline ECAL_API size_t `[`Send`](#dc/d42/classeCAL_1_1CPublisher_1a6de143cb2500815322d36acee89414bd)`(const std::string & s_,long long time_,long long acknowledge_timeout_ms_) const` | Send a message to all subscribers synchronized.
`public ECAL_API bool `[`AddEventCallback`](#dc/d42/classeCAL_1_1CPublisher_1af62a9ab48e4f1186320ae23343d971e4)`(eCAL_Publisher_Event type_,`[`PubEventCallbackT`](src/content/docs/doxygen/md/api-PubEventCallbackT.md#df/d76/ecal__callback_8h_1ad5ee2b03f650f613c9ae5487a73630a1)` callback_)` | Add callback function for publisher events.
`public ECAL_API bool `[`RemEventCallback`](#dc/d42/classeCAL_1_1CPublisher_1ac4774ce73ec86542c0629d147f0e3640)`(eCAL_Publisher_Event type_)` | Remove callback function for publisher events.
`public inline ECAL_API bool `[`IsCreated`](#dc/d42/classeCAL_1_1CPublisher_1aca0e771b005d79ab250bed26a5f6b7ef)`() const` | Query if the publisher is created.
`public ECAL_API bool `[`IsSubscribed`](#dc/d42/classeCAL_1_1CPublisher_1aa92ac2fec84b4723f35eca7409aa6546)`() const` | Query if the publisher is subscribed.
`public ECAL_API size_t `[`GetSubscriberCount`](#dc/d42/classeCAL_1_1CPublisher_1a5c3e26fc1d257295623815c0aeae0feb)`() const` | Query the number of subscribers.
`public ECAL_API std::string `[`GetTopicName`](#dc/d42/classeCAL_1_1CPublisher_1a548e81f35cfab6e17261a2da61ee482c)`() const` | Gets name of the connected topic.
`public ECAL_API std::string `[`GetTypeName`](#dc/d42/classeCAL_1_1CPublisher_1a00e879f37846423f74065e13e89c56ed)`() const` | Gets type of the connected topic.
`public ECAL_API std::string `[`GetDescription`](#dc/d42/classeCAL_1_1CPublisher_1a8c617ff05ca9890c90173a9769cdfb4b)`() const` | Gets description of the connected topic.
`public ECAL_API `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` `[`GetDataTypeInformation`](#dc/d42/classeCAL_1_1CPublisher_1addc866ba86a84a8c83e4cb78b6c4f540)`() const` | Gets description of the connected topic.
`public ECAL_API std::string `[`Dump`](#dc/d42/classeCAL_1_1CPublisher_1af28f3497376600ed38a74fcbbf64d745)`(const std::string & indent_) const` | Dump the whole class state into a string.
`protected std::shared_ptr< CDataWriter > `[`m_datawriter`](#dc/d42/classeCAL_1_1CPublisher_1ae0795ab1ef910f5da05c9ddfd7f1b997) | 
`protected long long `[`m_id`](#dc/d42/classeCAL_1_1CPublisher_1a66b63af78a33a72cb405ddbf217972f4) | 
`protected bool `[`m_created`](#dc/d42/classeCAL_1_1CPublisher_1a17d1644afc64a07edfa29020614fb08e) | 
`protected bool `[`m_initialized`](#dc/d42/classeCAL_1_1CPublisher_1a184a2c26af2fb02b2849b8d7122aae1e) | 
`protected void `[`InitializeQOS`](#dc/d42/classeCAL_1_1CPublisher_1aa5596202833f51f675dd43d2425e8092)`()` | 
`protected void `[`InitializeTLayer`](#dc/d42/classeCAL_1_1CPublisher_1aaf61ea734d14239a173f5112aab2cc5c)`()` | 
`protected bool `[`ApplyTopicToDescGate`](#dc/d42/classeCAL_1_1CPublisher_1a8800c3a1c833332fdc3b5d197c4bf775)`(const std::string & topic_name_,const `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` | 

### Members

#### `public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher_1aeec7c85875f2c620315a878cda238c53)`()` {#dc/d42/classeCAL_1_1CPublisher_1aeec7c85875f2c620315a878cda238c53}

Constructor.

#### `public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher_1ada151b4279624922e103fe0c36c5fc76)`(const std::string & topic_name_,const std::string & topic_type_,const std::string & topic_desc_)` {#dc/d42/classeCAL_1_1CPublisher_1ada151b4279624922e103fe0c36c5fc76}

Constructor.

> Deprecated: Please use the constructor [CPublisher(const std::string& topic_name_, const SDataTypeInformation& topic_info_)](src/content/docs/doxygen/md/api-CPublisher.md#dc/d42/classeCAL_1_1CPublisher_1a504c55b1883606f3ea948a3642c409cc) instead. This function will be removed in future eCAL versions.

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_type_` Type name. 

* `topic_desc_` Type description (optional).

#### `public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher_1a504c55b1883606f3ea948a3642c409cc)`(const std::string & topic_name_,const `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` {#dc/d42/classeCAL_1_1CPublisher_1a504c55b1883606f3ea948a3642c409cc}

Constructor.

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_info_` Topic information (encoding, type, descriptor)

#### `public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher_1a96fadf431f080e3a87af932daf580032)`(const std::string & topic_name_)` {#dc/d42/classeCAL_1_1CPublisher_1a96fadf431f080e3a87af932daf580032}

Constructor.

#### Parameters
* `topic_name_` Unique topic name.

#### `public virtual ECAL_API `[`~CPublisher`](#dc/d42/classeCAL_1_1CPublisher_1a1a2979f4b0e461334e4030953fe7218a)`()` {#dc/d42/classeCAL_1_1CPublisher_1a1a2979f4b0e461334e4030953fe7218a}

Destructor.

#### `public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher_1a1c29f699017455282cb467ae8536c592)`(const `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher)` &) = delete` {#dc/d42/classeCAL_1_1CPublisher_1a1c29f699017455282cb467ae8536c592}

CPublishers are non-copyable.

#### `public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher)` & `[`operator=`](#dc/d42/classeCAL_1_1CPublisher_1ad5b9e7d8d31b03009169a74df203237b)`(const `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher)` &) = delete` {#dc/d42/classeCAL_1_1CPublisher_1ad5b9e7d8d31b03009169a74df203237b}

CPublishers are non-copyable.

#### `public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher_1a654085c2a3760965cca316fc9c82117b)`(`[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher)` && rhs) noexcept` {#dc/d42/classeCAL_1_1CPublisher_1a654085c2a3760965cca316fc9c82117b}

CPublishers are move-enabled.

#### `public ECAL_API `[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher)` & `[`operator=`](#dc/d42/classeCAL_1_1CPublisher_1a8c455bcb6e8d0cfcc3b75ba552223709)`(`[`CPublisher`](#dc/d42/classeCAL_1_1CPublisher)` && rhs) noexcept` {#dc/d42/classeCAL_1_1CPublisher_1a8c455bcb6e8d0cfcc3b75ba552223709}

CPublishers are move-enabled.

#### `public ECAL_API bool `[`Create`](#dc/d42/classeCAL_1_1CPublisher_1ad47ccd97b3ea5c93ff8307fbb78e3287)`(const std::string & topic_name_,const std::string & topic_type_,const std::string & topic_desc_)` {#dc/d42/classeCAL_1_1CPublisher_1ad47ccd97b3ea5c93ff8307fbb78e3287}

Creates this object.

> Deprecated: Please use the create method bool [Create(const std::string& topic_name_, const SDataTypeInformation& topic_info_)](src/content/docs/doxygen/md/api-Create.md#dc/d42/classeCAL_1_1CPublisher_1abf94f945976e3b9c0a65a8f17199006f) instead. This function will be removed in future eCAL versions.

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_type_` Type name (optional). 

* `topic_desc_` Type description (optional).

#### Returns
True if it succeeds, false if it fails.

#### `public ECAL_API bool `[`Create`](#dc/d42/classeCAL_1_1CPublisher_1abf94f945976e3b9c0a65a8f17199006f)`(const std::string & topic_name_,const `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` {#dc/d42/classeCAL_1_1CPublisher_1abf94f945976e3b9c0a65a8f17199006f}

Creates this object.

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_info_` Topic information (encoding, type, descriptor)

#### Returns
True if it succeeds, false if it fails.

#### `public inline ECAL_API bool `[`Create`](#dc/d42/classeCAL_1_1CPublisher_1ac21dbd9ebcab1e0e476f9602e7c48e56)`(const std::string & topic_name_)` {#dc/d42/classeCAL_1_1CPublisher_1ac21dbd9ebcab1e0e476f9602e7c48e56}

Creates this object.

#### Parameters
* `topic_name_` Unique topic name.

#### Returns
True if it succeeds, false if it fails.

#### `public ECAL_API bool `[`Destroy`](#dc/d42/classeCAL_1_1CPublisher_1ab7d83d1ac37f8887c1cd9a1eccbca352)`()` {#dc/d42/classeCAL_1_1CPublisher_1ab7d83d1ac37f8887c1cd9a1eccbca352}

Destroys this object.

#### Returns
True if it succeeds, false if it fails.

#### `public ECAL_API bool `[`SetTypeName`](#dc/d42/classeCAL_1_1CPublisher_1a3e7c32e9a4a11c9259e26dbccd5e996d)`(const std::string & topic_type_name_)` {#dc/d42/classeCAL_1_1CPublisher_1a3e7c32e9a4a11c9259e26dbccd5e996d}

Setup topic type name.

> Deprecated: Please use the method bool [SetDataTypeInformation(const SDataTypeInformation& topic_info_)](src/content/docs/doxygen/md/api-SetDataTypeInformation.md#dc/d42/classeCAL_1_1CPublisher_1aad7aed589c12253ff805c795b9106b39) instead. This function will be removed in future eCAL versions.

#### Parameters
* `topic_type_name_` Topic type name.

#### Returns
True if it succeeds, false if it fails.

#### `public ECAL_API bool `[`SetDescription`](#dc/d42/classeCAL_1_1CPublisher_1ad87a26fdf303329647a2c9fb0c865c11)`(const std::string & topic_desc_)` {#dc/d42/classeCAL_1_1CPublisher_1ad87a26fdf303329647a2c9fb0c865c11}

Setup topic description.

> Deprecated: Please use the method bool [SetDataTypeInformation(const SDataTypeInformation& topic_info_)](src/content/docs/doxygen/md/api-SetDataTypeInformation.md#dc/d42/classeCAL_1_1CPublisher_1aad7aed589c12253ff805c795b9106b39) instead. This function will be removed in future eCAL versions.

#### Parameters
* `topic_desc_` Description string.

#### Returns
True if it succeeds, false if it fails.

#### `public ECAL_API bool `[`SetDataTypeInformation`](#dc/d42/classeCAL_1_1CPublisher_1aad7aed589c12253ff805c795b9106b39)`(const `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` {#dc/d42/classeCAL_1_1CPublisher_1aad7aed589c12253ff805c795b9106b39}

Setup topic information.

#### Parameters
* `topic_info_` Topic information attributes.

#### Returns
True if it succeeds, false if it fails.

#### `public ECAL_API bool `[`SetAttribute`](#dc/d42/classeCAL_1_1CPublisher_1a02e676312007e8917ffd9b9ffc1a777a)`(const std::string & attr_name_,const std::string & attr_value_)` {#dc/d42/classeCAL_1_1CPublisher_1a02e676312007e8917ffd9b9ffc1a777a}

Sets publisher attribute.

#### Parameters
* `attr_name_` Attribute name. 

* `attr_value_` Attribute value.

#### Returns
True if it succeeds, false if it fails. @experimental

#### `public ECAL_API bool `[`ClearAttribute`](#dc/d42/classeCAL_1_1CPublisher_1a01cb058cadfeaa8403a52a6b2bbb3225)`(const std::string & attr_name_)` {#dc/d42/classeCAL_1_1CPublisher_1a01cb058cadfeaa8403a52a6b2bbb3225}

Removes publisher attribute.

#### Parameters
* `attr_name_` Attribute name.

#### Returns
True if it succeeds, false if it fails. @experimental

#### `public ECAL_API bool `[`ShareType`](#dc/d42/classeCAL_1_1CPublisher_1ac80396f79fdcf4dc3426948dc6c30988)`(bool state_)` {#dc/d42/classeCAL_1_1CPublisher_1ac80396f79fdcf4dc3426948dc6c30988}

Share topic type.

#### Parameters
* `state_` Set type share mode (true == share type).

#### Returns
True if it succeeds, false if it fails.

#### `public ECAL_API bool `[`ShareDescription`](#dc/d42/classeCAL_1_1CPublisher_1a5a928f8e02f5cb1fc2c428e2207bb720)`(bool state_)` {#dc/d42/classeCAL_1_1CPublisher_1a5a928f8e02f5cb1fc2c428e2207bb720}

Share topic description.

#### Parameters
* `state_` Set description share mode (true == share description).

#### Returns
True if it succeeds, false if it fails.

#### `public ECAL_API bool `[`SetQOS`](#dc/d42/classeCAL_1_1CPublisher_1a7742362c6bd52a5cf4bf5432402beaf1)`(const `[`QOS::SWriterQOS`](src/content/docs/doxygen/md/api-eCAL::QOS::SWriterQOS.md#d1/d85/structeCAL_1_1QOS_1_1SWriterQOS)` & qos_)` {#dc/d42/classeCAL_1_1CPublisher_1a7742362c6bd52a5cf4bf5432402beaf1}

Set publisher quality of service attributes.

> Deprecated: Will be removed in future eCAL versions.

#### Parameters
* `qos_` Quality of service policies.

#### Returns
True if it succeeds, false if it fails.

#### `public ECAL_API `[`QOS::SWriterQOS`](src/content/docs/doxygen/md/api-eCAL::QOS::SWriterQOS.md#d1/d85/structeCAL_1_1QOS_1_1SWriterQOS)` `[`GetQOS`](#dc/d42/classeCAL_1_1CPublisher_1a16b531c461127e2e22ef6fe02fcf79b9)`()` {#dc/d42/classeCAL_1_1CPublisher_1a16b531c461127e2e22ef6fe02fcf79b9}

Get current publisher quality of service attributes.

> Deprecated: Will be removed in future eCAL versions.

#### Returns
Quality of service attributes.

#### `public ECAL_API bool `[`SetLayerMode`](#dc/d42/classeCAL_1_1CPublisher_1a679db56f8d6bb28f94ef9f356158680f)`(`[`TLayer::eTransportLayer`](src/content/docs/doxygen/md/api-eTransportLayer.md#d4/dd8/ecal__tlayer_8h_1a65b651c8133a86e4850afa99db69a59a)` layer_,`[`TLayer::eSendMode`](src/content/docs/doxygen/md/api-eSendMode.md#d4/dd8/ecal__tlayer_8h_1ae475e842a5ad28c0104f9558e9bdb91a)` mode_)` {#dc/d42/classeCAL_1_1CPublisher_1a679db56f8d6bb28f94ef9f356158680f}

Set publisher send mode for specific transport layer.

#### Parameters
* `layer_` Transport layer. 

* `mode_` Send mode.

#### Returns
True if it succeeds, false if it fails.

#### `public ECAL_API bool `[`SetMaxBandwidthUDP`](#dc/d42/classeCAL_1_1CPublisher_1a59e4fe88875ec6498d82174840e6b19c)`(long bandwidth_)` {#dc/d42/classeCAL_1_1CPublisher_1a59e4fe88875ec6498d82174840e6b19c}

Set publisher maximum transmit bandwidth for the udp layer.

> Deprecated: Will be removed in future eCAL versions.

#### Parameters
* `bandwidth_` Maximum bandwidth in bytes/s (-1 == unlimited).

#### Returns
True if it succeeds, false if it fails.

#### `public ECAL_API bool `[`ShmSetBufferCount`](#dc/d42/classeCAL_1_1CPublisher_1af489ade9595abe747ec0067fb78c1a3f)`(long buffering_)` {#dc/d42/classeCAL_1_1CPublisher_1af489ade9595abe747ec0067fb78c1a3f}

Set publisher maximum number of used shared memory buffers.

#### Parameters
* `buffering_` Maximum number of used buffers (needs to be greater than 1, default = 1).

#### Returns
True if it succeeds, false if it fails.

#### `public ECAL_API bool `[`ShmEnableZeroCopy`](#dc/d42/classeCAL_1_1CPublisher_1af057c139ad7f40fe6574e095f5ff806c)`(bool state_)` {#dc/d42/classeCAL_1_1CPublisher_1af057c139ad7f40fe6574e095f5ff806c}

Enable zero copy shared memory transport mode.

By default, the built-in shared memory layer is configured to make two memory copies one on the publisher and one on the subscriber side.

The intention of this implementation is to free the file as fast as possible after writing and reading its content to allow other processes to access the content with minimal latency. The publisher and subscribers are fully decoupled and can access their internal memory copy independently.

If ShmEnableZeroCopy is switched on no memory will be copied at all using the low level binary publish / subscribe API. On publisher side the memory copy is exectuted into the opened memory file. On the subscriber side the user message callback is called right after opening the memory file. A direct pointer to the memory payload is forwarded and can be processed with no latency. The memory file will be closed after the user callback function returned.

The advantage of this configuration is a much higher performance for large payloads (> 1024 kB). The disadvantage of this configuration is that in the time when the callback is executed the memory file is blocked for other subscribers and for writing publishers too. Maybe this can be eliminated by a better memory file read/write access implementation (lock free read) in future releases.

Today, for specific scenarios (1:1 pub/sub connections with large payloads for example) this feature can increase the performance remarkable. But please keep in mind to return from the message callback function as fast as possible to not delay subsequent read/write access operations.

By using the [eCAL::CPayloadWriter](src/content/docs/doxygen/md/api-eCAL::CPayloadWriter.md#dd/db1/classeCAL_1_1CPayloadWriter) API a full zero copy implementation is possible by providing separate methods for the initialization and the modification of the memory file content (see [CPayloadWriter](src/content/docs/doxygen/md/api-eCAL::CPayloadWriter.md#dd/db1/classeCAL_1_1CPayloadWriter) documentation).

#### Parameters
* `state_` Set type zero copy mode for shared memory transport layer (true == zero copy enabled).

#### Returns
True if it succeeds, false if it fails.

#### `public ECAL_API bool `[`ShmSetAcknowledgeTimeout`](#dc/d42/classeCAL_1_1CPublisher_1a809dab69596b6f4632bcf0b5d68b4eef)`(long long acknowledge_timeout_ms_)` {#dc/d42/classeCAL_1_1CPublisher_1a809dab69596b6f4632bcf0b5d68b4eef}

Force connected subscribers to send acknowledge event after processing the message and block publisher send call on this event with a timeout.

Most applications perform very well with the default behavior. If subscribers are too slow to process incoming messages then the overall software architecture needs to be checked, software components need to be optimized or parallelized.

There may still be cases where it could make sense to synchronize the transfer of the payload from a publisher to a subscriber by using an additional handshake event. This event is signaled by a subscriber back to the sending publisher to confirm the complete payload transmission and the processed subscriber callback.

The publisher will wait up to the specified timeout for the acknowledge signals of all connected subscribers before sending new content. Finally that means the publishers [CPublisher::Send](src/content/docs/doxygen/md/api-Send.md#dc/d42/classeCAL_1_1CPublisher_1acbea7ac61cfb86ca5a939e281a89285f) API function call is now blocked and will not return until all subscriber have read and processed their content or the timeout has been reached.

#### Parameters
* `acknowledge_timeout_ms_` timeout to wait for acknowledge signal from connected subscriber in ms (0 == no handshake).

#### Returns
True if it succeeds, false if it fails.

#### `public template<>`  <br/>`inline bool `[`ShmSetAcknowledgeTimeout`](#dc/d42/classeCAL_1_1CPublisher_1aa82567ba534ba4d25ffd87a18ac92160)`(std::chrono::duration< Rep, Period > acknowledge_timeout_)` {#dc/d42/classeCAL_1_1CPublisher_1aa82567ba534ba4d25ffd87a18ac92160}

Force connected subscribers to send acknowledge event after processing the message and block publisher send call on this event with a timeout.

See [ShmSetAcknowledgeTimeout(long long acknowledge_timeout_ms_)](src/content/docs/doxygen/md/api-ShmSetAcknowledgeTimeout.md#dc/d42/classeCAL_1_1CPublisher_1a809dab69596b6f4632bcf0b5d68b4eef)

#### Parameters
* `acknowledge_timeout_` timeout to wait for acknowledge signal from connected subscriber (0 == no handshake).

#### Returns
True if it succeeds, false if it fails.

#### `public ECAL_API bool `[`SetID`](#dc/d42/classeCAL_1_1CPublisher_1a1098fe2ca3ac7c8dae5f9845c000b16b)`(long long id_)` {#dc/d42/classeCAL_1_1CPublisher_1a1098fe2ca3ac7c8dae5f9845c000b16b}

Set the specific topic id.

#### Parameters
* `id_` The topic id for subscriber side filtering (0 == no id).

#### Returns
True if it succeeds, false if it fails.

#### `public ECAL_API size_t `[`Send`](#dc/d42/classeCAL_1_1CPublisher_1acbea7ac61cfb86ca5a939e281a89285f)`(const void * buf_,size_t len_,long long time_) const` {#dc/d42/classeCAL_1_1CPublisher_1acbea7ac61cfb86ca5a939e281a89285f}

Send a message to all subscribers.

#### Parameters
* `buf_` Pointer to content buffer. 

* `len_` Length of buffer. 

* `time_` Send time (-1 = use eCAL system time in us, default = -1).

#### Returns
Number of bytes sent.

#### `public ECAL_API size_t `[`Send`](#dc/d42/classeCAL_1_1CPublisher_1a5f97c75cbcaeb7bd31e451560d473103)`(`[`CPayloadWriter`](src/content/docs/doxygen/md/api-eCAL::CPayloadWriter.md#dd/db1/classeCAL_1_1CPayloadWriter)` & payload_,long long time_) const` {#dc/d42/classeCAL_1_1CPublisher_1a5f97c75cbcaeb7bd31e451560d473103}

Send a message to all subscribers.

#### Parameters
* `payload_` Payload. 

* `time_` Send time (-1 = use eCAL system time in us, default = -1).

#### Returns
Number of bytes sent.

#### `public ECAL_API size_t `[`Send`](#dc/d42/classeCAL_1_1CPublisher_1afd1b28d92fda2ff899d1adbad4ea0d44)`(const void * buf_,size_t len_,long long time_,long long acknowledge_timeout_ms_) const` {#dc/d42/classeCAL_1_1CPublisher_1afd1b28d92fda2ff899d1adbad4ea0d44}

Send a message to all subscribers synchronized with acknowledge timeout (see also ShmSetAcknowledgeTimeout).

This synchronized mode is currently implemented for local interprocess communication (shm-ecal layer) only.

#### Parameters
* `buf_` Pointer to content buffer. 

* `len_` Length of buffer. 

* `time_` Send time (-1 = use eCAL system time in us). 

* `acknowledge_timeout_ms_` Maximum time to wait for all subscribers acknowledge feedback in ms (buffer received and processed).

#### Returns
Number of bytes sent.

#### `public inline ECAL_API size_t `[`SendSynchronized`](#dc/d42/classeCAL_1_1CPublisher_1ac2ee785a29c8fa2a85efe873b085005a)`(const void *const buf_,size_t len_,long long time_,long long acknowledge_timeout_ms_) const` {#dc/d42/classeCAL_1_1CPublisher_1ac2ee785a29c8fa2a85efe873b085005a}

Send a message to all subscribers synchronized with acknowledge timeout (see also ShmSetAcknowledgeTimeout).

> Deprecated: Please use the method size_t [Send(CPayloadWriter& payload_, long long time_, long long acknowledge_timeout_ms_) const ](src/content/docs/doxygen/md/api-Send.md#dc/d42/classeCAL_1_1CPublisher_1a8fd0663b7117ca27c70b3ddac16c60e8)instead. This function will be removed in future eCAL versions.

#### Parameters
* `buf_` Pointer to content buffer. 

* `len_` Length of buffer. 

* `time_` Send time (-1 = use eCAL system time in us). 

* `acknowledge_timeout_ms_` Maximum time to wait for all subscribers acknowledge feedback in ms (buffer received and processed).

#### Returns
Number of bytes sent.

#### `public ECAL_API size_t `[`Send`](#dc/d42/classeCAL_1_1CPublisher_1a8fd0663b7117ca27c70b3ddac16c60e8)`(`[`CPayloadWriter`](src/content/docs/doxygen/md/api-eCAL::CPayloadWriter.md#dd/db1/classeCAL_1_1CPayloadWriter)` & payload_,long long time_,long long acknowledge_timeout_ms_) const` {#dc/d42/classeCAL_1_1CPublisher_1a8fd0663b7117ca27c70b3ddac16c60e8}

Send a message to all subscribers synchronized with acknowledge timeout (see also ShmSetAcknowledgeTimeout).

This synchronized mode is currently implemented for local interprocess communication (shm-ecal layer) only.

#### Parameters
* `payload_` Payload. 

* `time_` Send time (-1 = use eCAL system time in us). 

* `acknowledge_timeout_ms_` Maximum time to wait for all subscribers acknowledge feedback in ms (buffer received and processed).

#### Returns
Number of bytes sent.

#### `public inline ECAL_API size_t `[`Send`](#dc/d42/classeCAL_1_1CPublisher_1ad3fc32ad6ebf11fad1a1aa1281eabeae)`(const std::string & s_,long long time_) const` {#dc/d42/classeCAL_1_1CPublisher_1ad3fc32ad6ebf11fad1a1aa1281eabeae}

Send a message to all subscribers.

#### Parameters
* `s_` String that contains content to send. 

* `time_` Send time (-1 = use eCAL system time in us, default = -1).

#### Returns
Number of bytes sent.

#### `public inline ECAL_API size_t `[`Send`](#dc/d42/classeCAL_1_1CPublisher_1a6de143cb2500815322d36acee89414bd)`(const std::string & s_,long long time_,long long acknowledge_timeout_ms_) const` {#dc/d42/classeCAL_1_1CPublisher_1a6de143cb2500815322d36acee89414bd}

Send a message to all subscribers synchronized.

#### Parameters
* `s_` String that contains content to send. 

* `time_` Send time (-1 = use eCAL system time in us). 

* `acknowledge_timeout_ms_` Maximum time to wait for all subscribers acknowledge feedback in ms (buffer received and processed).

#### Returns
Number of bytes sent.

#### `public ECAL_API bool `[`AddEventCallback`](#dc/d42/classeCAL_1_1CPublisher_1af62a9ab48e4f1186320ae23343d971e4)`(eCAL_Publisher_Event type_,`[`PubEventCallbackT`](src/content/docs/doxygen/md/api-PubEventCallbackT.md#df/d76/ecal__callback_8h_1ad5ee2b03f650f613c9ae5487a73630a1)` callback_)` {#dc/d42/classeCAL_1_1CPublisher_1af62a9ab48e4f1186320ae23343d971e4}

Add callback function for publisher events.

#### Parameters
* `type_` The event type to react on. 

* `callback_` The callback function to add.

#### Returns
True if succeeded, false if not.

#### `public ECAL_API bool `[`RemEventCallback`](#dc/d42/classeCAL_1_1CPublisher_1ac4774ce73ec86542c0629d147f0e3640)`(eCAL_Publisher_Event type_)` {#dc/d42/classeCAL_1_1CPublisher_1ac4774ce73ec86542c0629d147f0e3640}

Remove callback function for publisher events.

#### Parameters
* `type_` The event type to remove.

#### Returns
True if succeeded, false if not.

#### `public inline ECAL_API bool `[`IsCreated`](#dc/d42/classeCAL_1_1CPublisher_1aca0e771b005d79ab250bed26a5f6b7ef)`() const` {#dc/d42/classeCAL_1_1CPublisher_1aca0e771b005d79ab250bed26a5f6b7ef}

Query if the publisher is created.

#### Returns
True if created, false if not.

#### `public ECAL_API bool `[`IsSubscribed`](#dc/d42/classeCAL_1_1CPublisher_1aa92ac2fec84b4723f35eca7409aa6546)`() const` {#dc/d42/classeCAL_1_1CPublisher_1aa92ac2fec84b4723f35eca7409aa6546}

Query if the publisher is subscribed.

#### Returns
true if subscribed, false if not.

#### `public ECAL_API size_t `[`GetSubscriberCount`](#dc/d42/classeCAL_1_1CPublisher_1a5c3e26fc1d257295623815c0aeae0feb)`() const` {#dc/d42/classeCAL_1_1CPublisher_1a5c3e26fc1d257295623815c0aeae0feb}

Query the number of subscribers.

#### Returns
Number of subscribers.

#### `public ECAL_API std::string `[`GetTopicName`](#dc/d42/classeCAL_1_1CPublisher_1a548e81f35cfab6e17261a2da61ee482c)`() const` {#dc/d42/classeCAL_1_1CPublisher_1a548e81f35cfab6e17261a2da61ee482c}

Gets name of the connected topic.

#### Returns
The topic name.

#### `public ECAL_API std::string `[`GetTypeName`](#dc/d42/classeCAL_1_1CPublisher_1a00e879f37846423f74065e13e89c56ed)`() const` {#dc/d42/classeCAL_1_1CPublisher_1a00e879f37846423f74065e13e89c56ed}

Gets type of the connected topic.

> Deprecated: Please use the method [SDataTypeInformation](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)[GetDataTypeInformation()](src/content/docs/doxygen/md/api-GetDataTypeInformation.md#dc/d42/classeCAL_1_1CPublisher_1addc866ba86a84a8c83e4cb78b6c4f540) instead. You can extract the typename from the [SDataTypeInformation](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation) variable. This function will be removed in future eCAL versions.

#### Returns
The type name.

#### `public ECAL_API std::string `[`GetDescription`](#dc/d42/classeCAL_1_1CPublisher_1a8c617ff05ca9890c90173a9769cdfb4b)`() const` {#dc/d42/classeCAL_1_1CPublisher_1a8c617ff05ca9890c90173a9769cdfb4b}

Gets description of the connected topic.

> Deprecated: Please use the method [SDataTypeInformation](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)[GetDataTypeInformation()](src/content/docs/doxygen/md/api-GetDataTypeInformation.md#dc/d42/classeCAL_1_1CPublisher_1addc866ba86a84a8c83e4cb78b6c4f540) instead. You can extract the descriptor from the [SDataTypeInformation](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation) variable. This function will be removed in future eCAL versions.

#### Returns
The description.

#### `public ECAL_API `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` `[`GetDataTypeInformation`](#dc/d42/classeCAL_1_1CPublisher_1addc866ba86a84a8c83e4cb78b6c4f540)`() const` {#dc/d42/classeCAL_1_1CPublisher_1addc866ba86a84a8c83e4cb78b6c4f540}

Gets description of the connected topic.

#### Returns
The topic information.

#### `public ECAL_API std::string `[`Dump`](#dc/d42/classeCAL_1_1CPublisher_1af28f3497376600ed38a74fcbbf64d745)`(const std::string & indent_) const` {#dc/d42/classeCAL_1_1CPublisher_1af28f3497376600ed38a74fcbbf64d745}

Dump the whole class state into a string.

#### Parameters
* `indent_` Indentation used for dump.

#### Returns
The dump string.

#### `protected std::shared_ptr< CDataWriter > `[`m_datawriter`](#dc/d42/classeCAL_1_1CPublisher_1ae0795ab1ef910f5da05c9ddfd7f1b997) {#dc/d42/classeCAL_1_1CPublisher_1ae0795ab1ef910f5da05c9ddfd7f1b997}

#### `protected long long `[`m_id`](#dc/d42/classeCAL_1_1CPublisher_1a66b63af78a33a72cb405ddbf217972f4) {#dc/d42/classeCAL_1_1CPublisher_1a66b63af78a33a72cb405ddbf217972f4}

#### `protected bool `[`m_created`](#dc/d42/classeCAL_1_1CPublisher_1a17d1644afc64a07edfa29020614fb08e) {#dc/d42/classeCAL_1_1CPublisher_1a17d1644afc64a07edfa29020614fb08e}

#### `protected bool `[`m_initialized`](#dc/d42/classeCAL_1_1CPublisher_1a184a2c26af2fb02b2849b8d7122aae1e) {#dc/d42/classeCAL_1_1CPublisher_1a184a2c26af2fb02b2849b8d7122aae1e}

#### `protected void `[`InitializeQOS`](#dc/d42/classeCAL_1_1CPublisher_1aa5596202833f51f675dd43d2425e8092)`()` {#dc/d42/classeCAL_1_1CPublisher_1aa5596202833f51f675dd43d2425e8092}

#### `protected void `[`InitializeTLayer`](#dc/d42/classeCAL_1_1CPublisher_1aaf61ea734d14239a173f5112aab2cc5c)`()` {#dc/d42/classeCAL_1_1CPublisher_1aaf61ea734d14239a173f5112aab2cc5c}

#### `protected bool `[`ApplyTopicToDescGate`](#dc/d42/classeCAL_1_1CPublisher_1a8800c3a1c833332fdc3b5d197c4bf775)`(const std::string & topic_name_,const `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` {#dc/d42/classeCAL_1_1CPublisher_1a8800c3a1c833332fdc3b5d197c4bf775}

