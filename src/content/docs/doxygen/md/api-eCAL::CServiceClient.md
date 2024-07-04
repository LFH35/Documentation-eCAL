---
title: eCAL::CServiceClient class
---

## class `eCAL::CServiceClient` {#d5/d4c/classeCAL_1_1CServiceClient}

Service client wrapper class.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ECAL_API `[`CServiceClient`](#d5/d4c/classeCAL_1_1CServiceClient_1a901dc1fb638e9c06c983c00ebc590000)`()` | Constructor.
`public ECAL_API `[`CServiceClient`](#d5/d4c/classeCAL_1_1CServiceClient_1ad88c03f8fa5b7a08138515466850ae49)`(const std::string & service_name_)` | Constructor.
`public virtual ECAL_API `[`~CServiceClient`](#d5/d4c/classeCAL_1_1CServiceClient_1aef943524910c5c24ff8db9629abfbcea)`()` | Destructor.
`public ECAL_API `[`CServiceClient`](#d5/d4c/classeCAL_1_1CServiceClient_1a230e8bd181cd32b20a3f4d2e60ecfbb0)`(const `[`CServiceClient`](#d5/d4c/classeCAL_1_1CServiceClient)` &) = delete` | CServiceClients are non-copyable.
`public ECAL_API `[`CServiceClient`](#d5/d4c/classeCAL_1_1CServiceClient)` & `[`operator=`](#d5/d4c/classeCAL_1_1CServiceClient_1aff52f97a63644df77a8cbca434693841)`(const `[`CServiceClient`](#d5/d4c/classeCAL_1_1CServiceClient)` &) = delete` | CServiceClients are non-copyable.
`public ECAL_API bool `[`Create`](#d5/d4c/classeCAL_1_1CServiceClient_1ac4cfb013603351270aed2f83a917b44f)`(const std::string & service_name_)` | Creates this object.
`public ECAL_API bool `[`Destroy`](#d5/d4c/classeCAL_1_1CServiceClient_1ac2b9fedf1711133fff0023ec377cb045)`()` | Destroys this object.
`public ECAL_API bool `[`SetHostName`](#d5/d4c/classeCAL_1_1CServiceClient_1ad3718ae4184366e335f78918fb8274f8)`(const std::string & host_name_)` | Change the host name filter for that client instance.
`public ECAL_API bool `[`Call`](#d5/d4c/classeCAL_1_1CServiceClient_1ab53eff1227ed32ecb49cc6769303e268)`(const std::string & method_name_,const std::string & request_,int timeout_)` | Call a method of this service, responses will be returned by callback.
`public ECAL_API bool `[`Call`](#d5/d4c/classeCAL_1_1CServiceClient_1afac68a2bdf163c6b23f58677a8611510)`(const std::string & method_name_,const std::string & request_,int timeout_,`[`ServiceResponseVecT`](src/content/docs/doxygen/md/api-ServiceResponseVecT.md#de/ddd/ecal__service__info_8h_1a36106945ed691d2225be35b428072270)` * service_response_vec_)` | Call a method of this service, all responses will be returned in service_response_vec_.
`public ECAL_API bool `[`Call`](#d5/d4c/classeCAL_1_1CServiceClient_1a8c50f6bbc65f5a8cf617b554ec6b385e)`(const std::string & host_name_,const std::string & method_name_,const std::string & request_,struct `[`SServiceResponse`](src/content/docs/doxygen/md/api-eCAL::SServiceResponse.md#d9/d0b/structeCAL_1_1SServiceResponse)` & service_info_,std::string & response_)` | Call method of this service, for specific host.
`public ECAL_API bool `[`CallAsync`](#d5/d4c/classeCAL_1_1CServiceClient_1a19586611a3d25a9ebe452954b543a659)`(const std::string & method_name_,const std::string & request_,int timeout_)` | Call a method of this service asynchronously, responses will be returned by callback.
`public ECAL_API bool `[`AddResponseCallback`](#d5/d4c/classeCAL_1_1CServiceClient_1aea2313031075e10b3a03893683531ddb)`(const `[`ResponseCallbackT`](src/content/docs/doxygen/md/api-ResponseCallbackT.md#de/ddd/ecal__service__info_8h_1a572360f74991bd1369ea24b5b7a0b6bb)` & callback_)` | Add server response callback.
`public ECAL_API bool `[`RemResponseCallback`](#d5/d4c/classeCAL_1_1CServiceClient_1a07f1a9ad950a5bcc95601f90e4f89832)`()` | Remove server response callback.
`public ECAL_API bool `[`AddEventCallback`](#d5/d4c/classeCAL_1_1CServiceClient_1a2d4e0d6eea8ecb83d15d2c0f874f50ac)`(eCAL_Client_Event type_,`[`ClientEventCallbackT`](src/content/docs/doxygen/md/api-ClientEventCallbackT.md#df/d76/ecal__callback_8h_1ac7bddc5ffadba36ef41e7d5ff6c02d62)` callback_)` | Add client event callback function.
`public ECAL_API bool `[`RemEventCallback`](#d5/d4c/classeCAL_1_1CServiceClient_1adb295c5035793bcbbfb9229b5c733981)`(eCAL_Client_Event type_)` | Remove client event callback function.
`public ECAL_API std::string `[`GetServiceName`](#d5/d4c/classeCAL_1_1CServiceClient_1a44d65f147834baf3a8f7534ab0cb04ce)`()` | Retrieve service name.
`public ECAL_API bool `[`IsConnected`](#d5/d4c/classeCAL_1_1CServiceClient_1a959993bba1c33ad2fed540febc91ac8a)`()` | Check connection state.
`protected std::shared_ptr< eCAL::CServiceClientImpl > `[`m_service_client_impl`](#d5/d4c/classeCAL_1_1CServiceClient_1aec38d1c79836154c83254225fe9ddf82) | 
`protected bool `[`m_created`](#d5/d4c/classeCAL_1_1CServiceClient_1a73b950bf56f4860b9b43de4d79e4ce84) | 

### Members

#### `public ECAL_API `[`CServiceClient`](#d5/d4c/classeCAL_1_1CServiceClient_1a901dc1fb638e9c06c983c00ebc590000)`()` {#d5/d4c/classeCAL_1_1CServiceClient_1a901dc1fb638e9c06c983c00ebc590000}

Constructor.

#### `public ECAL_API `[`CServiceClient`](#d5/d4c/classeCAL_1_1CServiceClient_1ad88c03f8fa5b7a08138515466850ae49)`(const std::string & service_name_)` {#d5/d4c/classeCAL_1_1CServiceClient_1ad88c03f8fa5b7a08138515466850ae49}

Constructor.

#### Parameters
* `service_name_` Unique service name.

#### `public virtual ECAL_API `[`~CServiceClient`](#d5/d4c/classeCAL_1_1CServiceClient_1aef943524910c5c24ff8db9629abfbcea)`()` {#d5/d4c/classeCAL_1_1CServiceClient_1aef943524910c5c24ff8db9629abfbcea}

Destructor.

#### `public ECAL_API `[`CServiceClient`](#d5/d4c/classeCAL_1_1CServiceClient_1a230e8bd181cd32b20a3f4d2e60ecfbb0)`(const `[`CServiceClient`](#d5/d4c/classeCAL_1_1CServiceClient)` &) = delete` {#d5/d4c/classeCAL_1_1CServiceClient_1a230e8bd181cd32b20a3f4d2e60ecfbb0}

CServiceClients are non-copyable.

#### `public ECAL_API `[`CServiceClient`](#d5/d4c/classeCAL_1_1CServiceClient)` & `[`operator=`](#d5/d4c/classeCAL_1_1CServiceClient_1aff52f97a63644df77a8cbca434693841)`(const `[`CServiceClient`](#d5/d4c/classeCAL_1_1CServiceClient)` &) = delete` {#d5/d4c/classeCAL_1_1CServiceClient_1aff52f97a63644df77a8cbca434693841}

CServiceClients are non-copyable.

#### `public ECAL_API bool `[`Create`](#d5/d4c/classeCAL_1_1CServiceClient_1ac4cfb013603351270aed2f83a917b44f)`(const std::string & service_name_)` {#d5/d4c/classeCAL_1_1CServiceClient_1ac4cfb013603351270aed2f83a917b44f}

Creates this object.

#### Parameters
* `service_name_` Unique service name.

#### Returns
True if successful.

#### `public ECAL_API bool `[`Destroy`](#d5/d4c/classeCAL_1_1CServiceClient_1ac2b9fedf1711133fff0023ec377cb045)`()` {#d5/d4c/classeCAL_1_1CServiceClient_1ac2b9fedf1711133fff0023ec377cb045}

Destroys this object.

#### Returns
True if successful.

#### `public ECAL_API bool `[`SetHostName`](#d5/d4c/classeCAL_1_1CServiceClient_1ad3718ae4184366e335f78918fb8274f8)`(const std::string & host_name_)` {#d5/d4c/classeCAL_1_1CServiceClient_1ad3718ae4184366e335f78918fb8274f8}

Change the host name filter for that client instance.

#### Parameters
* `host_name_` Host name filter (empty == all hosts)

#### Returns
True if successful.

#### `public ECAL_API bool `[`Call`](#d5/d4c/classeCAL_1_1CServiceClient_1ab53eff1227ed32ecb49cc6769303e268)`(const std::string & method_name_,const std::string & request_,int timeout_)` {#d5/d4c/classeCAL_1_1CServiceClient_1ab53eff1227ed32ecb49cc6769303e268}

Call a method of this service, responses will be returned by callback.

#### Parameters
* `method_name_` Method name. 

* `request_` Request string. 

* `timeout_` Maximum time before operation returns (in milliseconds, -1 means infinite).

#### Returns
True if successful.

#### `public ECAL_API bool `[`Call`](#d5/d4c/classeCAL_1_1CServiceClient_1afac68a2bdf163c6b23f58677a8611510)`(const std::string & method_name_,const std::string & request_,int timeout_,`[`ServiceResponseVecT`](src/content/docs/doxygen/md/api-ServiceResponseVecT.md#de/ddd/ecal__service__info_8h_1a36106945ed691d2225be35b428072270)` * service_response_vec_)` {#d5/d4c/classeCAL_1_1CServiceClient_1afac68a2bdf163c6b23f58677a8611510}

Call a method of this service, all responses will be returned in service_response_vec_.

#### Parameters
* `method_name_` Method name. 

* `request_` Request string. 

* `timeout_` Maximum time before operation returns (in milliseconds, -1 means infinite). 

* `service_response_vec_` Response vector containing service responses from every called service (null pointer == no response).

#### Returns
True if successful.

#### `public ECAL_API bool `[`Call`](#d5/d4c/classeCAL_1_1CServiceClient_1a8c50f6bbc65f5a8cf617b554ec6b385e)`(const std::string & host_name_,const std::string & method_name_,const std::string & request_,struct `[`SServiceResponse`](src/content/docs/doxygen/md/api-eCAL::SServiceResponse.md#d9/d0b/structeCAL_1_1SServiceResponse)` & service_info_,std::string & response_)` {#d5/d4c/classeCAL_1_1CServiceClient_1a8c50f6bbc65f5a8cf617b554ec6b385e}

Call method of this service, for specific host.

> Deprecated: Please use the create method bool [Call(const std::string& method_name_, const std::string& request_, int timeout_, ServiceResponseVecT* service_response_vec_)](src/content/docs/doxygen/md/api-Call.md#d5/d4c/classeCAL_1_1CServiceClient_1afac68a2bdf163c6b23f58677a8611510) instead. This function will be removed in future eCAL versions.

#### Parameters
* `host_name_` Host name. 

* `method_name_` Method name. 

* `request_` Request string. 

* `service_info_` Service response struct for detailed informations. 

* `response_` Response string.

#### Returns
True if successful.

#### `public ECAL_API bool `[`CallAsync`](#d5/d4c/classeCAL_1_1CServiceClient_1a19586611a3d25a9ebe452954b543a659)`(const std::string & method_name_,const std::string & request_,int timeout_)` {#d5/d4c/classeCAL_1_1CServiceClient_1a19586611a3d25a9ebe452954b543a659}

Call a method of this service asynchronously, responses will be returned by callback.

#### Parameters
* `method_name_` Method name. 

* `request_` Request string. 

* `timeout_` Maximum time before operation returns (in milliseconds, -1 means infinite) - NOT SUPPORTED YET.

#### Returns
True if successful.

#### `public ECAL_API bool `[`AddResponseCallback`](#d5/d4c/classeCAL_1_1CServiceClient_1aea2313031075e10b3a03893683531ddb)`(const `[`ResponseCallbackT`](src/content/docs/doxygen/md/api-ResponseCallbackT.md#de/ddd/ecal__service__info_8h_1a572360f74991bd1369ea24b5b7a0b6bb)` & callback_)` {#d5/d4c/classeCAL_1_1CServiceClient_1aea2313031075e10b3a03893683531ddb}

Add server response callback.

#### Parameters
* `callback_` Callback function for server response. 

#### Returns
True if successful.

#### `public ECAL_API bool `[`RemResponseCallback`](#d5/d4c/classeCAL_1_1CServiceClient_1a07f1a9ad950a5bcc95601f90e4f89832)`()` {#d5/d4c/classeCAL_1_1CServiceClient_1a07f1a9ad950a5bcc95601f90e4f89832}

Remove server response callback.

#### Returns
True if successful.

#### `public ECAL_API bool `[`AddEventCallback`](#d5/d4c/classeCAL_1_1CServiceClient_1a2d4e0d6eea8ecb83d15d2c0f874f50ac)`(eCAL_Client_Event type_,`[`ClientEventCallbackT`](src/content/docs/doxygen/md/api-ClientEventCallbackT.md#df/d76/ecal__callback_8h_1ac7bddc5ffadba36ef41e7d5ff6c02d62)` callback_)` {#d5/d4c/classeCAL_1_1CServiceClient_1a2d4e0d6eea8ecb83d15d2c0f874f50ac}

Add client event callback function.

#### Parameters
* `type_` The event type to react on. 

* `callback_` The callback function to add.

#### Returns
True if succeeded, false if not.

#### `public ECAL_API bool `[`RemEventCallback`](#d5/d4c/classeCAL_1_1CServiceClient_1adb295c5035793bcbbfb9229b5c733981)`(eCAL_Client_Event type_)` {#d5/d4c/classeCAL_1_1CServiceClient_1adb295c5035793bcbbfb9229b5c733981}

Remove client event callback function.

#### Parameters
* `type_` The event type to remove.

#### Returns
True if succeeded, false if not.

#### `public ECAL_API std::string `[`GetServiceName`](#d5/d4c/classeCAL_1_1CServiceClient_1a44d65f147834baf3a8f7534ab0cb04ce)`()` {#d5/d4c/classeCAL_1_1CServiceClient_1a44d65f147834baf3a8f7534ab0cb04ce}

Retrieve service name.

#### Returns
The service name.

#### `public ECAL_API bool `[`IsConnected`](#d5/d4c/classeCAL_1_1CServiceClient_1a959993bba1c33ad2fed540febc91ac8a)`()` {#d5/d4c/classeCAL_1_1CServiceClient_1a959993bba1c33ad2fed540febc91ac8a}

Check connection state.

#### Returns
True if connected, false if not.

#### `protected std::shared_ptr< eCAL::CServiceClientImpl > `[`m_service_client_impl`](#d5/d4c/classeCAL_1_1CServiceClient_1aec38d1c79836154c83254225fe9ddf82) {#d5/d4c/classeCAL_1_1CServiceClient_1aec38d1c79836154c83254225fe9ddf82}

#### `protected bool `[`m_created`](#d5/d4c/classeCAL_1_1CServiceClient_1a73b950bf56f4860b9b43de4d79e4ce84) {#d5/d4c/classeCAL_1_1CServiceClient_1a73b950bf56f4860b9b43de4d79e4ce84}

