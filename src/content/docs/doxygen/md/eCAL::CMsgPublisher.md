---
title: class eCAL::CMsgPublisher
---

```cpp
class eCAL::CMsgPublisher
  : public eCAL::CPublisher
```

eCAL abstract message publisher class.

Abstract publisher template class for messages. For details see documentation of [CPublisher](src/content/docs/doxygen/md/eCAL::CPublisher.md#dc/d42/classeCAL_1_1CPublisher) class.

## Members

### `public inline  `[`CMsgPublisher`](#d3/d46/classeCAL_1_1CMsgPublisher_1a4d93fbee6b0d438be4e34d20dfbc2779)`()` 

Default Constructor. Using this constructor, the object is not actually in a usable state. Before being able to send data, one has to call the `[Create()](src/content/docs/doxygen/md/Create.md#d3/d46/classeCAL_1_1CMsgPublisher_1a447bbe94735245dbccd3dc274103b770)` function, first.

### `public inline  `[`CMsgPublisher`](#d3/d46/classeCAL_1_1CMsgPublisher_1aef9e493c1bc5c996b7734d021792930f)`(const std::string & topic_name_,const std::string & topic_type_,const std::string & topic_desc_)` 

Constructor, that automatically intializes the Publisher.

> Deprecated: Please use the constructor [CMsgPublisher(const std::string& topic_name_, const SDataTypeInformation& topic_info_)](src/content/docs/doxygen/md/CMsgPublisher.md#d3/d46/classeCAL_1_1CMsgPublisher_1a099a034bc5cdb8cd52d930087c8e6ca1) instead. This function will be removed in future eCAL versions.

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_type_` Type name. 

* `topic_desc_` Type description (optional for description checking).

### `public inline  `[`CMsgPublisher`](#d3/d46/classeCAL_1_1CMsgPublisher_1a099a034bc5cdb8cd52d930087c8e6ca1)`(const std::string & topic_name_,const `[`SDataTypeInformation`](src/content/docs/doxygen/md/eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` 

Constructor, that automatically intializes the Publisher. This should be the preferred constructor.

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_info_` Struct that contains information of the datatype (name, encoding, description) of the topic.

### `public inline  `[`CMsgPublisher`](#d3/d46/classeCAL_1_1CMsgPublisher_1ae6cc2277dbe4e340c8eea9fc8296df92)`(const std::string & topic_name_)` 

Constructor, that automatically intializes the Publisher. If no datatype information about the topic is available, this constructor can be used.

#### Parameters
* `topic_name_` Unique topic name.

### `public  `[`CMsgPublisher`](#d3/d46/classeCAL_1_1CMsgPublisher_1a4def852ade5b4472d797a27e1654aa1a)`(const `[`CMsgPublisher`](#d3/d46/classeCAL_1_1CMsgPublisher)` &) = delete` 

Copy Constructor is not available.

### `public `[`CMsgPublisher`](#d3/d46/classeCAL_1_1CMsgPublisher)` & `[`operator=`](#d3/d46/classeCAL_1_1CMsgPublisher_1a7375e5420da968b444f9ece5b085e396)`(const `[`CMsgPublisher`](#d3/d46/classeCAL_1_1CMsgPublisher)` &) = delete` 

Copy Constructor is not available.

### `public  `[`CMsgPublisher`](#d3/d46/classeCAL_1_1CMsgPublisher_1ab27fc2988981dfe0dabe0481625f857b)`(`[`CMsgPublisher`](#d3/d46/classeCAL_1_1CMsgPublisher)` &&) = default` 

Move Constructor.

### `public `[`CMsgPublisher`](#d3/d46/classeCAL_1_1CMsgPublisher)` & `[`operator=`](#d3/d46/classeCAL_1_1CMsgPublisher_1aaa3b6cdc5f343672afafaa8827aa648e)`(`[`CMsgPublisher`](#d3/d46/classeCAL_1_1CMsgPublisher)` &&) = default` 

Move assignment.

### `public virtual  `[`~CMsgPublisher`](#d3/d46/classeCAL_1_1CMsgPublisher_1ab66547d0bba6cabc0ae8377ff767ae7f)`() = default` 

### `public inline bool `[`Create`](#d3/d46/classeCAL_1_1CMsgPublisher_1a447bbe94735245dbccd3dc274103b770)`(const std::string & topic_name_,const std::string & topic_type_,const std::string & topic_desc_)` 

Creates this object.

> Deprecated: Please use the method [Create(const std::string& topic_name_, const SDataTypeInformation& topic_info_)](src/content/docs/doxygen/md/Create.md#d3/d46/classeCAL_1_1CMsgPublisher_1ab55fdd779019a2b9b586a868547e8b41) instead. This function will be removed in future eCAL versions.

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_type_` Type name (optional for type checking). 

* `topic_desc_` Type description (optional for description checking).

#### Returns
True if it succeeds, false if it fails.

### `public inline bool `[`Create`](#d3/d46/classeCAL_1_1CMsgPublisher_1ab55fdd779019a2b9b586a868547e8b41)`(const std::string & topic_name_,const `[`SDataTypeInformation`](src/content/docs/doxygen/md/eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` 

Creates this object.

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_info_` Associated datatype description.

#### Returns
True if it succeeds, false if it fails.

### `public inline bool `[`Destroy`](#d3/d46/classeCAL_1_1CMsgPublisher_1aa6c33ab9f619e75e4e55abfb2e59c365)`()` 

Destroys this object.

#### Returns
True if it succeeds, false if it fails.

### `public inline size_t `[`Send`](#d3/d46/classeCAL_1_1CMsgPublisher_1a890f181c3fb819ce1f729de7220445a7)`(const T & msg_,long long time_)` 

Send serialized message.

#### Parameters
* `msg_` The message object. 

* `time_` Optional time stamp.

#### Returns
Number of bytes sent.

### `public inline size_t `[`Send`](#d3/d46/classeCAL_1_1CMsgPublisher_1aea3d9cd6fc0b77830dc00a164b09d81c)`(const T & msg_,long long time_,long long acknowledge_timeout_ms_)` 

Send a serialized message to all subscribers synchronized with acknowledge timeout (see also ShmSetAcknowledgeTimeout).

This synchronized mode is currently implemented for local interprocess communication (shm-ecal layer) only.

#### Parameters
* `msg_` The message object. 

* `time_` Time stamp. 

* `acknowledge_timeout_ms_` Maximum time to wait for all subscribers acknowledge feedback in ms (buffer received and processed).

#### Returns
Number of bytes sent.

### `protected inline virtual std::string `[`GetTypeName`](#d3/d46/classeCAL_1_1CMsgPublisher_1a655e634bf81b0bd3ce0956e6acbb653d)`() const` 

### `protected inline virtual std::string `[`GetDescription`](#d3/d46/classeCAL_1_1CMsgPublisher_1a5f86160010e4ed30c1e4872cc9e9e43a)`() const` 

### `protected inline virtual `[`SDataTypeInformation`](src/content/docs/doxygen/md/eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` `[`GetDataTypeInformation`](#d3/d46/classeCAL_1_1CMsgPublisher_1a5ea85d8abc25d2b41063cb05a59e49b3)`() const` 

