---
title: eCAL::CTimedCB class
---

## class `eCAL::CTimedCB` {#d5/d9f/classeCAL_1_1CTimedCB}

eCAL timer callback class.

> Deprecated: Will be removed in future eCAL versions.

The [CTimedCB](#d5/d9f/classeCAL_1_1CTimedCB) class is used to realize simple time triggered callbacks.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB_1a160ed4b5f96e4e073926292bdfc3b399)`()` | Constructor.
`public inline  `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB_1a1d7553b231d5beeae4959c77319cae9e)`(int timeout_,`[`TimerCallbackT`](src/content/docs/doxygen/md/api-TimerCallbackT.md#df/d76/ecal__callback_8h_1afa9b0ed5fa82263c5b5a0cb7fe96613d)` callback_,int delay_)` | Constructor.
`public inline virtual  `[`~CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB_1a1eed0c3bd9acdd4910ac5afe82445c7e)`()` | Destructor.
`public  `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB_1a8e48ca9bd416b243b1645d85374c3ca1)`(const `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB)` &) = delete` | 
`public `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB)` & `[`operator=`](#d5/d9f/classeCAL_1_1CTimedCB_1a0ffa41eb87b25a6298b51aad300c20be)`(const `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB)` &) = delete` | 
`public  `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB_1ac28dd0335f5d7ffedb44b147e0ae0eaf)`(`[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB)` && rhs) = delete` | 
`public `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB)` & `[`operator=`](#d5/d9f/classeCAL_1_1CTimedCB_1ab62b144def226d0c3a4dc6c355371fbe)`(`[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB)` && rhs) = delete` | 
`public inline bool `[`Start`](#d5/d9f/classeCAL_1_1CTimedCB_1ad8cc9becc6b20bb595cc44112eb4f976)`(const int timeout_,`[`TimerCallbackT`](src/content/docs/doxygen/md/api-TimerCallbackT.md#df/d76/ecal__callback_8h_1afa9b0ed5fa82263c5b5a0cb7fe96613d)` callback_,const int delay_)` | Start the timer.
`public inline bool `[`Stop`](#d5/d9f/classeCAL_1_1CTimedCB_1af47e494ebb54327c1b8f110e86711610)`()` | Stop the timer.

### Members

#### `public inline  `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB_1a160ed4b5f96e4e073926292bdfc3b399)`()` {#d5/d9f/classeCAL_1_1CTimedCB_1a160ed4b5f96e4e073926292bdfc3b399}

Constructor.

> Deprecated: Will be removed in future eCAL versions.

#### `public inline  `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB_1a1d7553b231d5beeae4959c77319cae9e)`(int timeout_,`[`TimerCallbackT`](src/content/docs/doxygen/md/api-TimerCallbackT.md#df/d76/ecal__callback_8h_1afa9b0ed5fa82263c5b5a0cb7fe96613d)` callback_,int delay_)` {#d5/d9f/classeCAL_1_1CTimedCB_1a1d7553b231d5beeae4959c77319cae9e}

Constructor.

> Deprecated: Will be removed in future eCAL versions.

#### Parameters
* `timeout_` Timer callback loop time in ms. 

* `callback_` The callback function. 

* `delay_` Timer callback delay for first call in ms.

#### `public inline virtual  `[`~CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB_1a1eed0c3bd9acdd4910ac5afe82445c7e)`()` {#d5/d9f/classeCAL_1_1CTimedCB_1a1eed0c3bd9acdd4910ac5afe82445c7e}

Destructor.

#### `public  `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB_1a8e48ca9bd416b243b1645d85374c3ca1)`(const `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB)` &) = delete` {#d5/d9f/classeCAL_1_1CTimedCB_1a8e48ca9bd416b243b1645d85374c3ca1}

#### `public `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB)` & `[`operator=`](#d5/d9f/classeCAL_1_1CTimedCB_1a0ffa41eb87b25a6298b51aad300c20be)`(const `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB)` &) = delete` {#d5/d9f/classeCAL_1_1CTimedCB_1a0ffa41eb87b25a6298b51aad300c20be}

#### `public  `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB_1ac28dd0335f5d7ffedb44b147e0ae0eaf)`(`[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB)` && rhs) = delete` {#d5/d9f/classeCAL_1_1CTimedCB_1ac28dd0335f5d7ffedb44b147e0ae0eaf}

#### `public `[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB)` & `[`operator=`](#d5/d9f/classeCAL_1_1CTimedCB_1ab62b144def226d0c3a4dc6c355371fbe)`(`[`CTimedCB`](#d5/d9f/classeCAL_1_1CTimedCB)` && rhs) = delete` {#d5/d9f/classeCAL_1_1CTimedCB_1ab62b144def226d0c3a4dc6c355371fbe}

#### `public inline bool `[`Start`](#d5/d9f/classeCAL_1_1CTimedCB_1ad8cc9becc6b20bb595cc44112eb4f976)`(const int timeout_,`[`TimerCallbackT`](src/content/docs/doxygen/md/api-TimerCallbackT.md#df/d76/ecal__callback_8h_1afa9b0ed5fa82263c5b5a0cb7fe96613d)` callback_,const int delay_)` {#d5/d9f/classeCAL_1_1CTimedCB_1ad8cc9becc6b20bb595cc44112eb4f976}

Start the timer.

> Deprecated: Will be removed in future eCAL versions.

#### Parameters
* `timeout_` Timer callback loop time in ms. 

* `callback_` The callback function. 

* `delay_` Timer callback delay for first call in ms.

#### Returns
True if timer could be started.

#### `public inline bool `[`Stop`](#d5/d9f/classeCAL_1_1CTimedCB_1af47e494ebb54327c1b8f110e86711610)`()` {#d5/d9f/classeCAL_1_1CTimedCB_1af47e494ebb54327c1b8f110e86711610}

Stop the timer.

> Deprecated: Will be removed in future eCAL versions.

#### Returns
True if timer could be stopped.

