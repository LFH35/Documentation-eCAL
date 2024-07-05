---
title: class eCAL::CTimer
sidebar:
  order: 2
---

eCAL timer class.

The [CTimer](#d0/df5/classeCAL_1_1CTimer) class is used to realize simple time triggered callbacks.

## Members

### `public ECAL_API `[`CTimer`](#d0/df5/classeCAL_1_1CTimer_1accff7c4ade6b4c3963f3aa1ecda30797)`()` 

Constructor.

### `public ECAL_API `[`CTimer`](#d0/df5/classeCAL_1_1CTimer_1ab260fc7614585065aa7dedb056c9af63)`(int timeout_,`[`TimerCallbackT`](src/content/docs/doxygen/md/TimerCallbackT.md#df/d76/ecal__callback_8h_1afa9b0ed5fa82263c5b5a0cb7fe96613d)` callback_,int delay_)` 

Constructor.

#### Parameters
* `timeout_` Timer callback loop time in ms. 

* `callback_` The callback function. 

* `delay_` Timer callback delay for first call in ms.

### `public virtual ECAL_API `[`~CTimer`](#d0/df5/classeCAL_1_1CTimer_1a4afb54913b34e026e87823633b1ff0db)`()` 

Destructor.

### `public  `[`CTimer`](#d0/df5/classeCAL_1_1CTimer_1ad8fb51655ea25dec665359bbdba9f1e0)`(const `[`CTimer`](#d0/df5/classeCAL_1_1CTimer)` &) = delete` 

### `public `[`CTimer`](#d0/df5/classeCAL_1_1CTimer)` & `[`operator=`](#d0/df5/classeCAL_1_1CTimer_1a7945395a045380ef1a520b6d898f5df4)`(const `[`CTimer`](#d0/df5/classeCAL_1_1CTimer)` &) = delete` 

### `public  `[`CTimer`](#d0/df5/classeCAL_1_1CTimer_1a59d78b21ac2f852db739fb2036b17b05)`(`[`CTimer`](#d0/df5/classeCAL_1_1CTimer)` && rhs) = delete` 

### `public `[`CTimer`](#d0/df5/classeCAL_1_1CTimer)` & `[`operator=`](#d0/df5/classeCAL_1_1CTimer_1aaf1b4383c90f32bc5ea6de1fcc746381)`(`[`CTimer`](#d0/df5/classeCAL_1_1CTimer)` && rhs) = delete` 

### `public ECAL_API bool `[`Start`](#d0/df5/classeCAL_1_1CTimer_1a0cc3792068bede2dc56dd651def4980b)`(int timeout_,`[`TimerCallbackT`](src/content/docs/doxygen/md/TimerCallbackT.md#df/d76/ecal__callback_8h_1afa9b0ed5fa82263c5b5a0cb7fe96613d)` callback_,int delay_)` 

Start the timer.

#### Parameters
* `timeout_` Timer callback loop time in ms. 

* `callback_` The callback function. 

* `delay_` Timer callback delay for first call in ms.

#### Returns
True if timer could be started.

### `public ECAL_API bool `[`Stop`](#d0/df5/classeCAL_1_1CTimer_1aadbb9efabb053f51fea323530c29b8ea)`()` 

Stop the timer.

#### Returns
True if timer could be stopped.

### `protected std::unique_ptr< CTimerImpl > `[`m_timer`](#d0/df5/classeCAL_1_1CTimer_1ac9f11fce9d00ed1165f382b37cca65df) 

