# maxoptics_sdk.core.monitors.post_process_global_monitor_typing module

```py
class maxoptics_sdk.core.monitors.post_process_global_monitor_typing.PostProcessGlobalMonitor(*args, **kwargs)
```

- Bases: **dict**
  
**advanced:** [PostProcessGlobalMonitorAdvanced](#jump1)

**frequency_power:** [PostProcessGlobalMonitorFrequencyPower](#jump2)

<span id="jump1"></span>

```py
 class maxoptics_sdk.core.monitors.post_process_global_monitor_typing.PostProcessGlobalMonitorAdvanced(*args, **kwargs)    
```


- Bases: **dict**


**min_sampling_per_cycle:** int


<span id="jump2"></span>

```py
class maxoptics_sdk.core.monitors.post_process_global_monitor_typing.PostProcessGlobalMonitorFrequencyPower(*args, **kwargs)
```

- Bases: **dict**


**frequency_center:** *float | int | FloatParameter | FloatParameterExpression*

**frequency_max:** *float | int | FloatParameter | FloatParameterExpression*

**frequency_min:** *float | int | FloatParameter | FloatParameterExpression*

**frequency_points:** *int*

**frequency_span:** *float | int | FloatParameter | FloatParameterExpression*

**sample_spacing:** *Literal['uniform']*

**spacing_limit:** *Literal['min_max', 'center_span']*

**spacing_type:** *Literal['wavelength', 'frequency']*

**use_wavelength_spacing:** *bool*

**wavelength_center:** *float | int | FloatParameter | FloatParameterExpression*

**wavelength_max:** *float | int | FloatParameter | FloatParameterExpression*

**wavelength_min:** *float | int | FloatParameter | FloatParameterExpression*

**wavelength_span:** *float | int | FloatParameter | FloatParameterExpression*




