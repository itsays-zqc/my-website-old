# PostProcessEmePortEmePortGeneral

## PostProcessEmePort
```py
class 
maxoptics_sdk.core.ports.post_process_eme_port_typing.PostProcessEmePort(*args, **kwargs)
```
Bases: **dict**

**eme_port:** *PostProcessEmePortEmePort*
**geometry:** *PostProcessEmePortGeometry*

## PostProcessEmePortEmePort
```py 
class 
maxoptics_sdk.core.ports.post_process_eme_port_typing.PostProcessEmePortEmePort(*args, **kwargs)
```
Bases: **dict**

**advanced:** *PostProcessEmePortEmePortAdvanced*
**bent_waveguide:** *PostProcessEmePortEmePortBentWaveguide*
**general:** *PostProcessEmePortEmePortGeneral*

## PostProcessEmePortEmePortAdvanced
```py
class 
maxoptics_sdk.core.ports.post_process_eme_port_typing.PostProcessEmePortEmePortAdvanced(*args, **kwargs)
```
Bases: **dict**

**mode_removal:** *PostProcessEmePortEmePortAdvancedModeRemoval*
**number_of_trial_modes:** *int*
**offset:** *float | int | FloatParameter | FloatParameterExpression*

## PostProcessEmePortEmePortAdvancedModeRemoval
```py
class 
maxoptics_sdk.core.ports.post_process_eme_port_typing.PostProcessEmePortEmePortAdvancedModeRemoval(*args, **kwargs)
```
Bases: **dict**

**threshold:** *float | int | FloatParameter | FloatParameterExpression*

## PostProcessEmePortEmePortBentWaveguide
```py
class 
maxoptics_sdk.core.ports.post_process_eme_port_typing.PostProcessEmePortEmePortBentWaveguide(*args, **kwargs)
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

## PostProcessEmePortEmePortGeneral
```py
class 
maxoptics_sdk.core.ports.post_process_eme_port_typing.PostProcessEmePortEmePortGeneral(*args, **kwargs)
```
Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>mode_index</td>
    <td>int</td>
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
    <td>search</td>
    <td>Literal['near_n', 'max_index']</td>
  </tr>
</table>
<br/>

## PostProcessEmePortGeometry
``` py
class 
maxoptics_sdk.core.ports.post_process_eme_port_typing.PostProcessEmePortGeometry(*args, **kwargs)
```
Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  
  <tr>
    <td>port_location</td>
    <td>Literal['left', 'right']</td>
  </tr>
  <tr>
    <td>use_full_simulation_span</td>
    <td>bool</td>
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