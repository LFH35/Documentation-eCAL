---
title: eCAL::CServiceServer class
---

## class `eCAL::CServiceServer` {#d0/d09/classeCAL_1_1CServiceServer}

Service Server wrapper class.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ECAL_API `[`CServiceServer`](#d0/d09/classeCAL_1_1CServiceServer_1a4046992dbf0eaaf51dcc69d43e0f7d78)`()` | Constructor.
`public ECAL_API `[`CServiceServer`](#d0/d09/classeCAL_1_1CServiceServer_1a6db206279280c99f9deb829d475350e1)`(const std::string & service_name_)` | Constructor.
`public virtual ECAL_API `[`~CServiceServer`](#d0/d09/classeCAL_1_1CServiceServer_1a64a1e25a15d197e590672275696a35d6)`()` | Destructor.
`public ECAL_API `[`CServiceServer`](#d0/d09/classeCAL_1_1CServiceServer_1ab4a5c2b8cc033a9375de8cc29829f289)`(const `[`CServiceServer`](#d0/d09/classeCAL_1_1CServiceServer)` &) = delete` | CServiceServers are non-copyable.
`public ECAL_API `[`CServiceServer`](#d0/d09/classeCAL_1_1CServiceServer)` & `[`operator=`](#d0/d09/classeCAL_1_1CServiceServer_1a6f2a55da7ddd6cced90821ef02a0d58a)`(const `[`CServiceServer`](#d0/d09/classeCAL_1_1CServiceServer)` &) = delete` | CServiceServers are non-copyable.
`public ECAL_API bool `[`Create`](#d0/d09/classeCAL_1_1CServiceServer_1a3c7d5cbda958f2d4520061cd61376f74)`(const std::string & service_name_)` | Creates this object.
`public ECAL_API bool `[`Destroy`](#d0/d09/classeCAL_1_1CServiceServer_1a82a28745c0d9a964bfcaac493cb47502)`()` | Destroys this object.
`public ECAL_API bool `[`AddDescription`](#d0/d09/classeCAL_1_1CServiceServer_1a40a09560ccdb6dc359db6c9b21ded042)`(const std::string & method_,const std::string & req_type_,const std::string & req_desc_,const std::string & resp_type_,const std::string & resp_desc_)` | Add method type descriptions.
`public ECAL_API bool `[`AddMethodCallback`](#d0/d09/classeCAL_1_1CServiceServer_1af52167f5ef7b89bfff61ac48a1c46e77)`(const std::string & method_,const std::string & req_type_,const std::string & resp_type_,const `[`MethodCallbackT`](src/content/docs/doxygen/md/api-MethodCallbackT.md#de/ddd/ecal__service__info_8h_1ae0436af7a525f2b5fcc30025def57c30)` & callback_)` | Add method callback.
`public ECAL_API bool `[`RemMethodCallback`](#d0/d09/classeCAL_1_1CServiceServer_1a300d466ffc32432b63474308e0eae390)`(const std::string & method_)` | Remove method callback.
`public ECAL_API bool `[`AddEventCallback`](#d0/d09/classeCAL_1_1CServiceServer_1ac36d0e836d65a6cca9fc48e37dedf27d)`(eCAL_Server_Event type_,`[`ServerEventCallbackT`](src/content/docs/doxygen/md/api-ServerEventCallbackT.md#df/d76/ecal__callback_8h_1a9b49337a63f0ad773c4490f21b7b8d5c)` callback_)` | Add server event callback function.
`public ECAL_API bool `[`RemEventCallback`](#d0/d09/classeCAL_1_1CServiceServer_1a4dcd631696a6aed9cc177a5763ac579f)`(eCAL_Server_Event type_)` | Remove server event callback function.
`public ECAL_API std::string `[`GetServiceName`](#d0/d09/classeCAL_1_1CServiceServer_1a04fe300dfd88f0ed3e2ca3f3fde7a479)`()` | Retrieve service name.
`public ECAL_API bool `[`IsConnected`](#d0/d09/classeCAL_1_1CServiceServer_1a55c8a71b1f6d5cb1b70ab9317ed35a07)`()` | Check connection state.

### Members

#### `public ECAL_API `[`CServiceServer`](#d0/d09/classeCAL_1_1CServiceServer_1a4046992dbf0eaaf51dcc69d43e0f7d78)`()` {#d0/d09/classeCAL_1_1CServiceServer_1a4046992dbf0eaaf51dcc69d43e0f7d78}

Constructor.

#### `public ECAL_API `[`CServiceServer`](#d0/d09/classeCAL_1_1CServiceServer_1a6db206279280c99f9deb829d475350e1)`(const std::string & service_name_)` {#d0/d09/classeCAL_1_1CServiceServer_1a6db206279280c99f9deb829d475350e1}

Constructor.

#### Parameters
* `service_name_` Unique service name.

#### `public virtual ECAL_API `[`~CServiceServer`](#d0/d09/classeCAL_1_1CServiceServer_1a64a1e25a15d197e590672275696a35d6)`()` {#d0/d09/classeCAL_1_1CServiceServer_1a64a1e25a15d197e590672275696a35d6}

Destructor.

#### `public ECAL_API `[`CServiceServer`](#d0/d09/classeCAL_1_1CServiceServer_1ab4a5c2b8cc033a9375de8cc29829f289)`(const `[`CServiceServer`](#d0/d09/classeCAL_1_1CServiceServer)` &) = delete` {#d0/d09/classeCAL_1_1CServiceServer_1ab4a5c2b8cc033a9375de8cc29829f289}

CServiceServers are non-copyable.

#### `public ECAL_API `[`CServiceServer`](#d0/d09/classeCAL_1_1CServiceServer)` & `[`operator=`](#d0/d09/classeCAL_1_1CServiceServer_1a6f2a55da7ddd6cced90821ef02a0d58a)`(const `[`CServiceServer`](#d0/d09/classeCAL_1_1CServiceServer)` &) = delete` {#d0/d09/classeCAL_1_1CServiceServer_1a6f2a55da7ddd6cced90821ef02a0d58a}

CServiceServers are non-copyable.

#### `public ECAL_API bool `[`Create`](#d0/d09/classeCAL_1_1CServiceServer_1a3c7d5cbda958f2d4520061cd61376f74)`(const std::string & service_name_)` {#d0/d09/classeCAL_1_1CServiceServer_1a3c7d5cbda958f2d4520061cd61376f74}

Creates this object.

#### Parameters
* `service_name_` Unique service name.

#### Returns
True if successful.

#### `public ECAL_API bool `[`Destroy`](#d0/d09/classeCAL_1_1CServiceServer_1a82a28745c0d9a964bfcaac493cb47502)`()` {#d0/d09/classeCAL_1_1CServiceServer_1a82a28745c0d9a964bfcaac493cb47502}

Destroys this object.

#### Returns
True if successful.

#### `public ECAL_API bool `[`AddDescription`](#d0/d09/classeCAL_1_1CServiceServer_1a40a09560ccdb6dc359db6c9b21ded042)`(const std::string & method_,const std::string & req_type_,const std::string & req_desc_,const std::string & resp_type_,const std::string & resp_desc_)` {#d0/d09/classeCAL_1_1CServiceServer_1a40a09560ccdb6dc359db6c9b21ded042}

Add method type descriptions.

#### Parameters
* `method_` Service method name. 

* `req_type_` Service method request type. 

* `req_desc_` Service method request description. 

* `resp_type_` Service method response type. 

* `resp_desc_` Service method response description.

#### Returns
True if successful.

#### `public ECAL_API bool `[`AddMethodCallback`](#d0/d09/classeCAL_1_1CServiceServer_1af52167f5ef7b89bfff61ac48a1c46e77)`(const std::string & method_,const std::string & req_type_,const std::string & resp_type_,const `[`MethodCallbackT`](src/content/docs/doxygen/md/api-MethodCallbackT.md#de/ddd/ecal__service__info_8h_1ae0436af7a525f2b5fcc30025def57c30)` & callback_)` {#d0/d09/classeCAL_1_1CServiceServer_1af52167f5ef7b89bfff61ac48a1c46e77}

Add method callback.

#### Parameters
* `method_` Service method name. 

* `req_type_` Service method request type. 

* `resp_type_` Service method response type. 

* `callback_` Callback function for client request.

#### Returns
True if successful.

#### `public ECAL_API bool `[`RemMethodCallback`](#d0/d09/classeCAL_1_1CServiceServer_1a300d466ffc32432b63474308e0eae390)`(const std::string & method_)` {#d0/d09/classeCAL_1_1CServiceServer_1a300d466ffc32432b63474308e0eae390}

Remove method callback.

#### Parameters
* `method_` Service method name.

#### Returns
True if successful.

#### `public ECAL_API bool `[`AddEventCallback`](#d0/d09/classeCAL_1_1CServiceServer_1ac36d0e836d65a6cca9fc48e37dedf27d)`(eCAL_Server_Event type_,`[`ServerEventCallbackT`](src/content/docs/doxygen/md/api-ServerEventCallbackT.md#df/d76/ecal__callback_8h_1a9b49337a63f0ad773c4490f21b7b8d5c)` callback_)` {#d0/d09/classeCAL_1_1CServiceServer_1ac36d0e836d65a6cca9fc48e37dedf27d}

Add server event callback function.

#### Parameters
* `type_` The event type to react on. 

* `callback_` The callback function to add.

#### Returns
True if succeeded, false if not.

#### `public ECAL_API bool `[`RemEventCallback`](#d0/d09/classeCAL_1_1CServiceServer_1a4dcd631696a6aed9cc177a5763ac579f)`(eCAL_Server_Event type_)` {#d0/d09/classeCAL_1_1CServiceServer_1a4dcd631696a6aed9cc177a5763ac579f}

Remove server event callback function.

#### Parameters
* `type_` The event type to remove.

#### Returns
True if succeeded, false if not.

#### `public ECAL_API std::string `[`GetServiceName`](#d0/d09/classeCAL_1_1CServiceServer_1a04fe300dfd88f0ed3e2ca3f3fde7a479)`()` {#d0/d09/classeCAL_1_1CServiceServer_1a04fe300dfd88f0ed3e2ca3f3fde7a479}

Retrieve service name.

#### Returns
The service name.

#### `public ECAL_API bool `[`IsConnected`](#d0/d09/classeCAL_1_1CServiceServer_1a55c8a71b1f6d5cb1b70ab9317ed35a07)`()` {#d0/d09/classeCAL_1_1CServiceServer_1a55c8a71b1f6d5cb1b70ab9317ed35a07}

Check connection state.

#### Returns
True if connected, false if not.

