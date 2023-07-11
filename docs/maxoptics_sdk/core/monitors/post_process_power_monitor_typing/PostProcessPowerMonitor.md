# PostProcessPowerMonitor

```py
class maxoptics_sdk.core.monitors.post_process_power_monitor_typing.PostProcessPowerMonitor(*args, **kwargs)
```
Bases: **dict**

**advanced:** PostProcessPowerMonitorAdvanced
**general:** PostProcessPowerMonitorGeneral
**geometry:** PostProcessPowerMonitorGeometry
**mode_expansion:** PostProcessPowerMonitorModeExpansion


```py
class 
maxoptics_sdk.core.monitors.post_process_power_monitor_typing.PostProcessPowerMonitorAdvanced(*args, **kwargs)
```

Bases: **dict**

**sampling_frequency:** *PostProcessPowerMonitorAdvancedSamplingFrequency*

```py
class 
maxoptics_sdk.core.monitors.post_process_power_monitor_typing.PostProcessPowerMonitorGeneralFrequencyProfile(*args, **kwargs)
```
Bases: dict

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td>frequency_center</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>frequency_max</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>frequency_min</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>frequency_points</td>
    <td>int</td>
  </tr>
  <tr>
    <td>frequency_span</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>sample_spacing</td>
    <td>Literal['uniform']</td>
  </tr>
  <tr>
    <td>spacing_limit</td>
    <td>Literal['min_max', 'center_span']</td>
  </tr>
  <tr>
    <td>spacing_type</td>
    <td>Literal['wavelength', 'frequency']</td>
  </tr>
  <tr>
    <td>use_wavelength_spacing</td>
    <td>bool</td>
  </tr>
  <tr>
    <td>wavelength_center</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>wavelength_max</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>wavelength_min</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>wavelength_span</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
</table>
<br/>
