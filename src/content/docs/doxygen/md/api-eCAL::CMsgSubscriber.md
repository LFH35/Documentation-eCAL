---
title: eCAL::CMsgSubscriber class
---

## class `eCAL::CMsgSubscriber` {#d5/de3/classeCAL_1_1CMsgSubscriber}

```
class eCAL::CMsgSubscriber
  : public eCAL::CSubscriber
```

eCAL abstract message subscriber class.

Abstract subscriber template class for messages. For details see documentation of [CPublisher](src/content/docs/doxygen/md/api-eCAL::CPublisher.md#dc/d42/classeCAL_1_1CPublisher) class.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a13a0ea3e138347c12427e27906862ebd)`()` | Constructor.
`public inline  `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a85f1acc60a0a2433870af7d3ac0521c3)`(const std::string & topic_name_,const std::string & topic_type_,const std::string & topic_desc_)` | Constructor.
`public inline  `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a51c386152b3d3755a07fd136cac97d89)`(const std::string & topic_name_,const `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` | Constructor.
`public virtual  `[`~CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a538777ad215b51551802ac9760a4f461)`() = default` | 
`public  `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber_1abbfecfca61a4f85e87677f50e7579ee8)`(const `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber)` &) = delete` | Copy Constructor is not available.
`public `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber)` & `[`operator=`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a4eaa67dd19a69d7df9b4de99d2791e55)`(const `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber)` &) = delete` | Copy Constructor is not available.
`public inline  `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber_1abde498b05779c5b14abc1ff6d6a46cef)`(`[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber)` && rhs)` | Move Constructor.
`public inline `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber)` & `[`operator=`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a1c925d1a051449161e6849dcd10219d8)`(`[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber)` && rhs)` | Move assignment.
`public inline bool `[`Create`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a66f407c0a800d138623cebfdedfabaa6)`(const std::string & topic_name_,const std::string & topic_type_,const std::string & topic_desc_)` | Creates this object.
`public inline bool `[`Create`](#d5/de3/classeCAL_1_1CMsgSubscriber_1accb975230fcd283bd24cedae3e13ca7c)`(const std::string & topic_name_,const `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` | Creates this object.
`public inline bool `[`Destroy`](#d5/de3/classeCAL_1_1CMsgSubscriber_1afbe5f1b2feb8aa384a2d9fa08b000cc0)`()` | Destroys this object.
`public inline bool `[`Receive`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a9f55f730114002d9a3df318525c41370)`(T & msg_,long long * time_,int rcv_timeout_) const` | Receive deserialized message.
`public inline bool `[`AddReceiveCallback`](#d5/de3/classeCAL_1_1CMsgSubscriber_1aefaca53dac611afbd69e021dcfc09883)`(`[`MsgReceiveCallbackT`](src/content/docs/doxygen/md/api-MsgReceiveCallbackT.md#d5/de3/classeCAL_1_1CMsgSubscriber_1af215a62bb04debf7eb34a1ce3dfda674)` callback_)` | Add receive callback for incoming messages.
`public inline bool `[`RemReceiveCallback`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a41bdbee6fa7b78aade1c972b6b93bf7c)`()` | Remove receive callback for incoming messages.
`protected inline virtual std::string `[`GetTypeName`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a7e51f2afa87e7b061e859c50bf29d2fc)`() const` | 
`protected inline virtual std::string `[`GetDescription`](#d5/de3/classeCAL_1_1CMsgSubscriber_1ae9838b16efeab5fd660c73ab15bd8341)`() const` | 
`protected inline virtual `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` `[`GetDataTypeInformation`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a88d1d01c7f4e2d8aaf68f05753eefa9b)`() const` | 
`protected bool `[`Deserialize`](#d5/de3/classeCAL_1_1CMsgSubscriber_1aada1091134f3d22473ed9f01f5b99e5c)`(T & msg_,const void * buffer_,size_t size_) const` | 
`typedef `[`MsgReceiveCallbackT`](#d5/de3/classeCAL_1_1CMsgSubscriber_1af215a62bb04debf7eb34a1ce3dfda674) | eCAL message receive callback function

### Members

#### `public inline  `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a13a0ea3e138347c12427e27906862ebd)`()` {#d5/de3/classeCAL_1_1CMsgSubscriber_1a13a0ea3e138347c12427e27906862ebd}

Constructor.

#### `public inline  `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a85f1acc60a0a2433870af7d3ac0521c3)`(const std::string & topic_name_,const std::string & topic_type_,const std::string & topic_desc_)` {#d5/de3/classeCAL_1_1CMsgSubscriber_1a85f1acc60a0a2433870af7d3ac0521c3}

Constructor.

> Deprecated: Please use the constructor [CMsgSubscriber(const std::string& topic_name_, const SDataTypeInformation& topic_info_)](src/content/docs/doxygen/md/api-CMsgSubscriber.md#d5/de3/classeCAL_1_1CMsgSubscriber_1a51c386152b3d3755a07fd136cac97d89) instead. This function will be removed in future eCAL versions.

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_type_` Type name (optional for type checking). 

* `topic_desc_` Type description (optional for description checking).

#### `public inline  `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a51c386152b3d3755a07fd136cac97d89)`(const std::string & topic_name_,const `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` {#d5/de3/classeCAL_1_1CMsgSubscriber_1a51c386152b3d3755a07fd136cac97d89}

Constructor.

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_info_` Topic type information (encoding, type, descriptor).

#### `public virtual  `[`~CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a538777ad215b51551802ac9760a4f461)`() = default` {#d5/de3/classeCAL_1_1CMsgSubscriber_1a538777ad215b51551802ac9760a4f461}

#### `public  `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber_1abbfecfca61a4f85e87677f50e7579ee8)`(const `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber)` &) = delete` {#d5/de3/classeCAL_1_1CMsgSubscriber_1abbfecfca61a4f85e87677f50e7579ee8}

Copy Constructor is not available.

#### `public `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber)` & `[`operator=`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a4eaa67dd19a69d7df9b4de99d2791e55)`(const `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber)` &) = delete` {#d5/de3/classeCAL_1_1CMsgSubscriber_1a4eaa67dd19a69d7df9b4de99d2791e55}

Copy Constructor is not available.

#### `public inline  `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber_1abde498b05779c5b14abc1ff6d6a46cef)`(`[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber)` && rhs)` {#d5/de3/classeCAL_1_1CMsgSubscriber_1abde498b05779c5b14abc1ff6d6a46cef}

Move Constructor.

#### `public inline `[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber)` & `[`operator=`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a1c925d1a051449161e6849dcd10219d8)`(`[`CMsgSubscriber`](#d5/de3/classeCAL_1_1CMsgSubscriber)` && rhs)` {#d5/de3/classeCAL_1_1CMsgSubscriber_1a1c925d1a051449161e6849dcd10219d8}

Move assignment.

#### `public inline bool `[`Create`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a66f407c0a800d138623cebfdedfabaa6)`(const std::string & topic_name_,const std::string & topic_type_,const std::string & topic_desc_)` {#d5/de3/classeCAL_1_1CMsgSubscriber_1a66f407c0a800d138623cebfdedfabaa6}

Creates this object.

> Deprecated: Please use the method [CMsgSubscriber(const std::string& topic_name_, const SDataTypeInformation& topic_info_)](src/content/docs/doxygen/md/api-CMsgSubscriber.md#d5/de3/classeCAL_1_1CMsgSubscriber_1a51c386152b3d3755a07fd136cac97d89) instead. This function will be removed in future eCAL versions.

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_type_` Type name (optional for type checking). 

* `topic_desc_` Type description (optional for description checking).

#### Returns
true if it succeeds, false if it fails.

#### `public inline bool `[`Create`](#d5/de3/classeCAL_1_1CMsgSubscriber_1accb975230fcd283bd24cedae3e13ca7c)`(const std::string & topic_name_,const `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` & topic_info_)` {#d5/de3/classeCAL_1_1CMsgSubscriber_1accb975230fcd283bd24cedae3e13ca7c}

Creates this object.

#### Parameters
* `topic_name_` Unique topic name. 

* `topic_info_` Topic type information (encoding, type, descriptor).

#### Returns
true if it succeeds, false if it fails.

#### `public inline bool `[`Destroy`](#d5/de3/classeCAL_1_1CMsgSubscriber_1afbe5f1b2feb8aa384a2d9fa08b000cc0)`()` {#d5/de3/classeCAL_1_1CMsgSubscriber_1afbe5f1b2feb8aa384a2d9fa08b000cc0}

Destroys this object.

#### Returns
true if it succeeds, false if it fails.

#### `public inline bool `[`Receive`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a9f55f730114002d9a3df318525c41370)`(T & msg_,long long * time_,int rcv_timeout_) const` {#d5/de3/classeCAL_1_1CMsgSubscriber_1a9f55f730114002d9a3df318525c41370}

Receive deserialized message.

#### Parameters
* `msg_` The message object. 

* `time_` Optional receive time stamp. 

* `rcv_timeout_` Receive timeout in ms.

#### Returns
True if a message could received, false otherwise.

#### `public inline bool `[`AddReceiveCallback`](#d5/de3/classeCAL_1_1CMsgSubscriber_1aefaca53dac611afbd69e021dcfc09883)`(`[`MsgReceiveCallbackT`](src/content/docs/doxygen/md/api-MsgReceiveCallbackT.md#d5/de3/classeCAL_1_1CMsgSubscriber_1af215a62bb04debf7eb34a1ce3dfda674)` callback_)` {#d5/de3/classeCAL_1_1CMsgSubscriber_1aefaca53dac611afbd69e021dcfc09883}

Add receive callback for incoming messages.

#### Parameters
* `callback_` The callback function.

#### Returns
True if it succeeds, false if it fails.

#### `public inline bool `[`RemReceiveCallback`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a41bdbee6fa7b78aade1c972b6b93bf7c)`()` {#d5/de3/classeCAL_1_1CMsgSubscriber_1a41bdbee6fa7b78aade1c972b6b93bf7c}

Remove receive callback for incoming messages.

#### Returns
True if it succeeds, false if it fails.

#### `protected inline virtual std::string `[`GetTypeName`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a7e51f2afa87e7b061e859c50bf29d2fc)`() const` {#d5/de3/classeCAL_1_1CMsgSubscriber_1a7e51f2afa87e7b061e859c50bf29d2fc}

#### `protected inline virtual std::string `[`GetDescription`](#d5/de3/classeCAL_1_1CMsgSubscriber_1ae9838b16efeab5fd660c73ab15bd8341)`() const` {#d5/de3/classeCAL_1_1CMsgSubscriber_1ae9838b16efeab5fd660c73ab15bd8341}

#### `protected inline virtual `[`SDataTypeInformation`](src/content/docs/doxygen/md/api-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` `[`GetDataTypeInformation`](#d5/de3/classeCAL_1_1CMsgSubscriber_1a88d1d01c7f4e2d8aaf68f05753eefa9b)`() const` {#d5/de3/classeCAL_1_1CMsgSubscriber_1a88d1d01c7f4e2d8aaf68f05753eefa9b}

#### `protected bool `[`Deserialize`](#d5/de3/classeCAL_1_1CMsgSubscriber_1aada1091134f3d22473ed9f01f5b99e5c)`(T & msg_,const void * buffer_,size_t size_) const` {#d5/de3/classeCAL_1_1CMsgSubscriber_1aada1091134f3d22473ed9f01f5b99e5c}

#### `typedef `[`MsgReceiveCallbackT`](#d5/de3/classeCAL_1_1CMsgSubscriber_1af215a62bb04debf7eb34a1ce3dfda674) {#d5/de3/classeCAL_1_1CMsgSubscriber_1af215a62bb04debf7eb34a1ce3dfda674}

eCAL message receive callback function

#### Parameters
* `topic_name_` Topic name of the data source (publisher). 

* `msg_` Message content. 

* `time_` Message time stamp. 

* `clock_` Message writer clock. 

* `id_` Message id.

