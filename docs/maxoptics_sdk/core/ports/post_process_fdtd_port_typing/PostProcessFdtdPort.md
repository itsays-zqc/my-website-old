# maxoptics_sdk.core.ports.post_process_fdtd_port_typing module

## PostProcessFdtdPort
```py
class 
maxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPort(*args, **kwargs)
```
Bases: **dict**

**geometry:** *PostProcessFdtdPortGeometry*

**modal_properties:** *PostProcessFdtdPortModalProperties*

## PostProcessFdtdPortGeometry
```py
class 
maxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPortGeometry(*args, **kwargs)
```
Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td>x</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>x_max</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>x_min</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>x_span</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>y</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>y_max</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>y_min</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>y_span</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>z</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>z_max</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>z_min</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>z_span</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
</table>
<br/>

## PostProcessFdtdPortModalProperties

```py
class 
maxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPortModalProperties(*args, **kwargs)
```
Bases: **dict**

**bent_waveguide:** *PostProcessFdtdPortModalPropertiesBentWaveguide*

**general:** *PostProcessFdtdPortModalPropertiesGeneral*

## PostProcessFdtdPortModalPropertiesBentWaveguide
```py
class 
maxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPortModalPropertiesBentWaveguide(*args, **kwargs)
```
Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td>bent_waveguide</td>
    <td>bool</td>
  </tr>
  <tr>
    <td>location</td>
    <td>Literal['simulation_center']</td>
  </tr>
  <tr>
    <td>orientation</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>radius</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
</table>
<br/>

## PostProcessFdtdPortModalPropertiesGeneral
```py
class 
maxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPortModalPropertiesGeneral(*args, **kwargs)
```
Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td>amplitude</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>direction</td>
    <td>Literal['forward', 'backward']</td>
  </tr>
  <tr>
    <td>inject_axis</td>
    <td>Literal['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z']</td>
  </tr>
  <tr>
    <td>mode_index</td>
    <td>int</td>
  </tr>
  <tr>
    <td>mode_removal</td>
    <td>PostProcessFdtdPortModalPropertiesGeneralModeRemoval</td>
  </tr>
  <tr>
    <td>mode_selection</td>
    <td>Literal['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import']</td>
  </tr>
  <tr>
    <td>n</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>number_of_trial_modes</td>
    <td>int</td>
  </tr>
  <tr>
    <td>phase</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>search</td>
    <td>Literal['near_n', 'max_index']</td>
  </tr>
</table>
<br/>

## PostProcessFdtdPortModalPropertiesGeneralModeRemoval
```py
class 
maxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPortModalPropertiesGeneralModeRemoval(*args, **kwargs)
```
Bases: **dict**

**threshold:** *float | int | FloatParameter | FloatParameterExpression*