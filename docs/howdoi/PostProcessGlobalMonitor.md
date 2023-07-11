# maxoptics_sdk.core.monitors.post_process_global_monitor_typing module

## PostProcessGlobalMonitor
```py
class 
maxoptics_sdk.core.monitors.post_process_global_monitor_typing.PostProcessGlobalMonitor(*args, **kwargs)
```

- Bases: **dict**
  
**advanced:** [PostProcessGlobalMonitorAdvanced](#jump1)

**frequency_power:** [PostProcessGlobalMonitorFrequencyPower](#jump2)

<span id="jump1"></span>

## PostProcessGlobalMonitorAdvanced
```py
 class 
 maxoptics_sdk.core.monitors.post_process_global_monitor_typing.PostProcessGlobalMonitorAdvanced(*args, **kwargs)    
```


- Bases: **dict**


**min_sampling_per_cycle:** int


<span id="jump2"></span>

## PostProcessGlobalMonitorFrequencyPower
```py
class 
maxoptics_sdk.core.monitors.post_process_global_monitor_typing.PostProcessGlobalMonitorFrequencyPower(*args, **kwargs)
```

- Bases: **dict**

## Parameters and Returns
<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td>frequency_center:</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>

  <tr>
    <td class="first-coluumn">frequency_max:</td>
    <td class="second-column">float | int | FloatParameter | FloatParameterExpression
    </td>
  </tr>

  <tr>
    <td>frequency_min:</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>

  <tr>
    <td> frequency_points:</td>
    <td> int </td>
  </tr>

  <tr>
    <td>frequency_span:</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>

  <tr>
    <td>sample_spacing:</td>
    <td>Literal['uniform']</td>
  </tr>

<tr>
    <td>ample_spacing:</td>
    <td>Literal['uniform']</td>
  </tr>
  
<tr>
    <td>ample_spacing:</td>
    <td>Literal['uniform']</td>
  </tr>

<tr>
    <td>spacing_limit:</td>
    <td>Literal['min_max', 'center_span']</td>
  </tr>

<tr>
    <td>spacing_type:</td>
    <td>Literal['wavelength', 'frequency']</td>
  </tr>

<tr>
    <td>use_wavelength_spacing:</td>
    <td>bool</td>
  </tr>

<tr>
    <td>wavelength_center:</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>

<tr>
    <td>wavelength_max:</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>


<tr>
    <td>wavelength_min:</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>

<tr>
    <td>wavelength_span:</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>


</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>