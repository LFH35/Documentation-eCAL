---
title: 2. class eCAL::CSubscriber
---

eCAL subscriber class.

The [CSubscriber](#d3/d33/classeCAL_1_1CSubscriber) class is used to receive topics from matching eCAL publishers. 
 For receiving the topic payload the subscriber class provides a callback interface and overloaded receive methods. 
```cpp
// create subscriber, topic name "A"
eCAL::CSubscriber sub("A");

//---------------------------------------------------------------------------------------
// receive content with 100 ms timeout as standard string and read receive time stamp
//---------------------------------------------------------------------------------------
std::string rcv_s;
long long time = 0;
size_t rcv_len = sub.Receive(rcv_s, &time, 100);

//---------------------------------------------------------------------------------------
// receive content with a callback functions
//---------------------------------------------------------------------------------------
void OnReceive(const char* topic_name_, const struct eCAL::SReceiveCallbackData* data_)
{
  size_t      size = data_->size;
  const void* data = data_->buf;
  long long   time = data_->time;
}

// add callback
sub.AddReceiveCallback(std::bind(OnReceive, std::placeholders::_1, std::placeholders::_2));

// idle main thread
while(eCAL::Ok())
{
  // sleep 100 ms
  std::this_thread::sleep_for(std::chrono::milliseconds(100));
}
```

# Members

### `public ECAL_API `[`CSubscriber`](#d3/d33/classeCAL_1_1CSubscriber_1aa7fb5a8fc8ea62b172ddb309b82128ec)`()` 

Constructor.

### `public ECAL_API `[`CSubscriber`](#d3/d33/classeCAL_1_1CSubscriber_1a94c85b36570ccc5821699e3e2eb48849)`(const std::string & topic_name_,const std::string & topic_type_,const std::string & topic_desc_)` 

Constructor.

> Deprecated: Please use the constructor [CSubscriber(const std::string& topic_name_, const SDataTypeInformation& topic_info_)](doxygen/md/zapi-CSubscriber.md#d3/d33/classeCAL_1_1CSubscriber_1ad5e15fc7c17ae35d32cae42006d7922e) instead. This function will be removed in future eCAL versions..

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_type_` Type name (optional for type checking). 

* `topic_desc_` Type description (optional for description checking).

### `public ECAL_API `[`CSubscriber`](#d3/d33/classeCAL_1_1CSubscriber_1ad5e15fc7c17ae35d32cae42006d7922e)`(const std::string & topic_name_,const `[`SDataTypeInformation`](doxygen/md/zapi-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` 

Constructor.

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_info_` Topic information (encoding, type, descriptor)

### `public ECAL_API `[`CSubscriber`](#d3/d33/classeCAL_1_1CSubscriber_1aa8f7d20d8c16b11d531850a4c7616388)`(const std::string & topic_name_)` 

Constructor.

#### Parameters
* `topic_name_` Unique topic name.

### `public virtual ECAL_API `[`~CSubscriber`](#d3/d33/classeCAL_1_1CSubscriber_1a5875cb28944b5abff4efdc1eaf18c77d)`()` 

Destructor.

### `public ECAL_API `[`CSubscriber`](#d3/d33/classeCAL_1_1CSubscriber_1a577b34a61563ae610d9e4d563e1c5e23)`(const `[`CSubscriber`](#d3/d33/classeCAL_1_1CSubscriber)` &) = delete` 

CSubscribers are non-copyable.

### `public ECAL_API `[`CSubscriber`](#d3/d33/classeCAL_1_1CSubscriber)` & `[`operator=`](#d3/d33/classeCAL_1_1CSubscriber_1a90867d43be4633ba5d5b2114b2b92294)`(const `[`CSubscriber`](#d3/d33/classeCAL_1_1CSubscriber)` &) = delete` 

CSubscribers are non-copyable.

### `public ECAL_API `[`CSubscriber`](#d3/d33/classeCAL_1_1CSubscriber_1a57b644fc055b56b33a5ad682c88d1932)`(`[`CSubscriber`](#d3/d33/classeCAL_1_1CSubscriber)` && rhs) noexcept` 

CSubscribers are move-enabled.

### `public ECAL_API `[`CSubscriber`](#d3/d33/classeCAL_1_1CSubscriber)` & `[`operator=`](#d3/d33/classeCAL_1_1CSubscriber_1aeae711f1cc7b0e6f3857208d7dfb009b)`(`[`CSubscriber`](#d3/d33/classeCAL_1_1CSubscriber)` && rhs) noexcept` 

CSubscribers are move-enabled.

### `public ECAL_API bool `[`Create`](#d3/d33/classeCAL_1_1CSubscriber_1af9d4527503a72a867b4911164a2ac7aa)`(const std::string & topic_name_,const std::string & topic_type_,const std::string & topic_desc_)` 

Creates this object.

> Deprecated: Please use the create method bool Create(const std::string& topic_name_, const STopicInformation& topic_info_) instead. This function will be removed in future eCAL versions.

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_type_` Type name (optional for type checking). 

* `topic_desc_` Type description (optional for description checking).

#### Returns
true if it succeeds, false if it fails.

### `public inline ECAL_API bool `[`Create`](#d3/d33/classeCAL_1_1CSubscriber_1a9a64692f7179b6f35e504342d3a88bd4)`(const std::string & topic_name_)` 

Creates this object.

#### Parameters
* `topic_name_` Unique topic name.

#### Returns
True if it succeeds, false if it fails.

### `public ECAL_API bool `[`Create`](#d3/d33/classeCAL_1_1CSubscriber_1a0a9d922ec165f1de8d10643343f5a5c7)`(const std::string & topic_name_,const `[`SDataTypeInformation`](doxygen/md/zapi-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` 

Creates this object.

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_info_` Topic information (encoding, type, descriptor)

#### Returns
True if it succeeds, false if it fails.

### `public ECAL_API bool `[`Destroy`](#d3/d33/classeCAL_1_1CSubscriber_1a9fcfccec4e1fd257dd12cf2cd80e8203)`()` 

Destroys this object.

#### Returns
true if it succeeds, false if it fails.

### `public ECAL_API bool `[`SetQOS`](#d3/d33/classeCAL_1_1CSubscriber_1a6d2eedfb0f6f188e755fdc10b8dd65aa)`(const `[`QOS::SReaderQOS`](doxygen/md/zapi-eCAL::QOS::SReaderQOS.md#dd/d67/structeCAL_1_1QOS_1_1SReaderQOS)` & qos_)` 

Set subscriber quality of service attributes.

> Deprecated: Will be removed in future eCAL versions.

#### Parameters
* `qos_` Quality of service policies.

#### Returns
True if it succeeds, false if it fails.

### `public ECAL_API `[`QOS::SReaderQOS`](doxygen/md/zapi-eCAL::QOS::SReaderQOS.md#dd/d67/structeCAL_1_1QOS_1_1SReaderQOS)` `[`GetQOS`](#d3/d33/classeCAL_1_1CSubscriber_1a354f4ef355df54ef7a9ed0d5041075ac)`()` 

Get current subscriber quality of service attributes.

> Deprecated: Will be removed in future eCAL versions.

#### Returns
Quality of service attributes.

### `public ECAL_API bool `[`SetID`](#d3/d33/classeCAL_1_1CSubscriber_1ae2d9cba79a3cb7b4b95d45170a960ad3)`(const std::set< long long > & id_set_)` 

Set a set of id's to prefiltering topics (see [CPublisher::SetID](doxygen/md/zapi-SetID.md#dc/d42/classeCAL_1_1CPublisher_1a1098fe2ca3ac7c8dae5f9845c000b16b)).

#### Parameters
* `id_set_` Set of id's.

#### Returns
True if it succeeds, false if it fails.

### `public ECAL_API bool `[`SetAttribute`](#d3/d33/classeCAL_1_1CSubscriber_1ac492eeefdacaeed58903de10231e1d85)`(const std::string & attr_name_,const std::string & attr_value_)` 

Sets subscriber attribute.

#### Parameters
* `attr_name_` Attribute name. 

* `attr_value_` Attribute value.

#### Returns
True if it succeeds, false if it fails. @experimental

### `public ECAL_API bool `[`ClearAttribute`](#d3/d33/classeCAL_1_1CSubscriber_1a36bbd182dffd749747a45647fb2c11a0)`(const std::string & attr_name_)` 

Removes subscriber attribute.

#### Parameters
* `attr_name_` Attribute name.

#### Returns
True if it succeeds, false if it fails. @experimental

### `public ECAL_API size_t `[`Receive`](#d3/d33/classeCAL_1_1CSubscriber_1aeed17e22a271f1bfe41f14fc472a329f)`(std::string & buf_,long long * time_,int rcv_timeout_) const` 

Receive a message from the publisher.

> Deprecated: Please use the method bool ReceiveBuffer(std::string& buf_, long long* time_ = nullptr, int rcv_timeout_ = 0) instead. This function will be removed in future eCAL versions.

#### Parameters
* `buf_` Standard string for copying message content. 

* `time_` Time from publisher in us (default = nullptr). 

* `rcv_timeout_` Maximum time before receive operation returns (in milliseconds, -1 means infinite).

#### Returns
Length of received buffer.

### `public ECAL_API bool `[`ReceiveBuffer`](#d3/d33/classeCAL_1_1CSubscriber_1add17afc444fa01f1774a214a23d9eb2d)`(std::string & buf_,long long * time_,int rcv_timeout_) const` 

Receive a message from the publisher (able to process zero length buffer).

#### Parameters
* `buf_` Standard string for copying message content. 

* `time_` Time from publisher in us (default = nullptr). 

* `rcv_timeout_` Maximum time before receive operation returns (in milliseconds, -1 means infinite).

#### Returns
True if it succeeds, false if it fails.

### `public ECAL_API bool `[`AddReceiveCallback`](#d3/d33/classeCAL_1_1CSubscriber_1ae9434a3d3816ba0bc81ad3dce0f202b7)`(`[`ReceiveCallbackT`](doxygen/md/zapi-ReceiveCallbackT.md#df/d76/ecal__callback_8h_1aa7cd61c577b65761ec5227aa509f1aa6)` callback_)` 

Add callback function for incoming receives.

#### Parameters
* `callback_` The callback function to add.

#### Returns
True if succeeded, false if not.

### `public ECAL_API bool `[`RemReceiveCallback`](#d3/d33/classeCAL_1_1CSubscriber_1a6e627d4fc8afce25d7317067e1555ecc)`()` 

Remove callback function for incoming receives.

#### Returns
True if succeeded, false if not.

### `public ECAL_API bool `[`AddEventCallback`](#d3/d33/classeCAL_1_1CSubscriber_1a3da35ff391cb6f5b11fbca47dc73fee3)`(eCAL_Subscriber_Event type_,`[`SubEventCallbackT`](doxygen/md/zapi-SubEventCallbackT.md#df/d76/ecal__callback_8h_1a86878088e2aad452b6881ccfe5ab8cd2)` callback_)` 

Add callback function for subscriber events.

#### Parameters
* `type_` The event type to react on. 

* `callback_` The callback function to add.

#### Returns
True if succeeded, false if not.

### `public ECAL_API bool `[`RemEventCallback`](#d3/d33/classeCAL_1_1CSubscriber_1a8bd9d9324c5aaeeb953d9697cceb6c39)`(eCAL_Subscriber_Event type_)` 

Remove callback function for subscriber events.

#### Parameters
* `type_` The event type to remove.

#### Returns
True if succeeded, false if not.

### `public inline ECAL_API bool `[`IsCreated`](#d3/d33/classeCAL_1_1CSubscriber_1ab1ac748ad7602edae725861e15801a82)`() const` 

Query if this object is created.

#### Returns
true if created, false if not.

### `public ECAL_API size_t `[`GetPublisherCount`](#d3/d33/classeCAL_1_1CSubscriber_1a10df03e071cd435b8d7f089e2820b981)`() const` 

Query the number of publishers.

#### Returns
Number of publishers.

### `public ECAL_API std::string `[`GetTopicName`](#d3/d33/classeCAL_1_1CSubscriber_1a485ae0a2e102d7563e1eca9e919178ec)`() const` 

Gets name of the connected topic.

#### Returns
The topic name.

### `public ECAL_API std::string `[`GetTypeName`](#d3/d33/classeCAL_1_1CSubscriber_1a8ca964ba862ac4658786b8bf5f7d46d5)`() const` 

Gets type of the connected topic.

> Deprecated: Please use the method [SDataTypeInformation](doxygen/md/zapi-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)[GetDataTypeInformation()](doxygen/md/zapi-GetDataTypeInformation.md#d3/d33/classeCAL_1_1CSubscriber_1a7e35f163ae5692ad3ec33c8282f1f4e3) instead. You can extract the typename from the [SDataTypeInformation](doxygen/md/zapi-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation) variable. This function will be removed in future eCAL versions.

#### Returns
The type name.

### `public ECAL_API std::string `[`GetDescription`](#d3/d33/classeCAL_1_1CSubscriber_1a4bd98308f9766f8da9dd7bbe9040000d)`() const` 

Gets description of the connected topic.

> Deprecated: Please use the method [SDataTypeInformation](doxygen/md/zapi-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)[GetDataTypeInformation()](doxygen/md/zapi-GetDataTypeInformation.md#d3/d33/classeCAL_1_1CSubscriber_1a7e35f163ae5692ad3ec33c8282f1f4e3) instead. You can extract the descriptor from the [SDataTypeInformation](doxygen/md/zapi-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation) variable. This function will be removed in future eCAL versions.

#### Returns
The description.

### `public ECAL_API `[`SDataTypeInformation`](doxygen/md/zapi-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` `[`GetDataTypeInformation`](#d3/d33/classeCAL_1_1CSubscriber_1a7e35f163ae5692ad3ec33c8282f1f4e3)`() const` 

Gets description of the connected topic.

#### Returns
The topic information.

### `public ECAL_API bool `[`SetTimeout`](#d3/d33/classeCAL_1_1CSubscriber_1aabe73171952a53d768b706668354f1f7)`(int timeout_)` 

Set the timeout parameter for triggering the timeout callback.

> Deprecated: Will be removed in future eCAL versions.

#### Parameters
* `timeout_` The timeout in milliseconds.

#### Returns
True if succeeded, false if not.

### `public ECAL_API std::string `[`Dump`](#d3/d33/classeCAL_1_1CSubscriber_1af0219891ad14c21e829458287d0f6961)`(const std::string & indent_) const` 

Dump the whole class state into a string.

#### Parameters
* `indent_` Indentation used for dump.

#### Returns
The dump sting.

### `protected std::shared_ptr< CDataReader > `[`m_datareader`](#d3/d33/classeCAL_1_1CSubscriber_1a6b29d0d7dd4cd0edb364fdadee37904b) 

### `protected bool `[`m_created`](#d3/d33/classeCAL_1_1CSubscriber_1a5b6cbe2dc4565a68f4d5be5ca1fc897d) 

### `protected bool `[`m_initialized`](#d3/d33/classeCAL_1_1CSubscriber_1a675c720e7ffcb5d292b22400a87c98ac) 

### `protected void `[`InitializeQOS`](#d3/d33/classeCAL_1_1CSubscriber_1a72c0884567370269d024e352db910699)`()` 

### `protected bool `[`ApplyTopicToDescGate`](#d3/d33/classeCAL_1_1CSubscriber_1a8d9177d3445b5516595b7e4cca027d2a)`(const std::string & topic_name_,const `[`SDataTypeInformation`](doxygen/md/zapi-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` 

