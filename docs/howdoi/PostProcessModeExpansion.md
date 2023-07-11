# maxoptics_sdk.core.monitors.post_process_mode_expansion_typing module

```py
class
maxoptics_sdk.core.monitors.post_process_mode_expansion_typing.PostProcessModeExpansion(*args, **kwargs)
```

- Bases: **dict**
  
**advanced:** [PostProcessModeExpansionGeometry](#jump1)

**frequency_power:** [PostProcessModeExpansionModeExpansion](#jump2)

<span id="jump1"></span>

```py
 class maxoptics_sdk.core.monitors.post_process_mode_expansion_typing.PostProcessModeExpansionGeometry(*args, **kwargs)
```
- Bases: **dict**

**monitor_type:** *Literal['2d_x_normal', '2d_y_normal', '2d_z_normal', 'x', 'y', 'z']*

**rotate_settings:** *PostProcessModeExpansionGeometryRotateSettings*

**x:** *float | int | FloatParameter | FloatParameterExpression*

**x_max:** *float | int | FloatParameter | FloatParameterExpression*

**x_min:** *float | int | FloatParameter | FloatParameterExpression*

**x_span:** *float | int | FloatParameter | FloatParameterExpression*

**y:** *float | int | FloatParameter | FloatParameterExpression*

**y_max:** *float | int | FloatParameter | FloatParameterExpression*

**y_min:** *float | int | FloatParameter | FloatParameterExpression*

**y_span:** *float | int | FloatParameter | FloatParameterExpression*

**z:** *float | int | FloatParameter | FloatParameterExpression*

**z_max:** *float | int | FloatParameter | FloatParameterExpression*

**z_min:** *float | int | FloatParameter | FloatParameterExpression*

**z_span:** *float | int | FloatParameter | FloatParameterExpression*


<span id="jump2"></span>

```py
class maxoptics_sdk.core.monitors.post_process_mode_expansion_typing.PostProcessModeExpansionGeometryRotateSettings(*args, **kwargs)
```
- Bases: **dict**

**phi:** *float | int | FloatParameter | FloatParameterExpression*

**rotation_offset:** *float | int | FloatParameter | FloatParameterExpression*

**theta:** *float | int | FloatParameter | FloatParameterExpression*

```py
class 
maxoptics_sdk.core.monitors.post_process_mode_expansion_typing PostProcessModeExpansionModeExpansion(*args, **kwargs)
```
Bases: **dict**

**direction:** *Literal['positive', 'negative']*

**mode_calculation:** *PostProcessModeExpansionModeExpansionModeCalculation*

**monitors_for_expansion:** *List[PostProcessModeExpansionModeExpansionmonitorsForExpansion]*

```py
class maxoptics_sdk.core.monitors.post_process_mode_expansion_typing PostProcessModeExpansionModeExpansionModeCalculation(*args, **kwargs)
```
Bases: **dict**

**bent_waveguide:** *PostProcessModeExpansionModeExpansionModeCalculationBentWaveguide*

**mode_index:** *Tuple[Any, ...] | List[Any]*

**mode_selection:** *Literal['fundamental', 'fundamental_TE', 'fundamental_TM', 'user_select']*

**n:** *float | int | FloatParameter | FloatParameterExpression*

**number_of_trial_modes:** *int*

**override_global_monitor_setting:**     *PostProcessModeExpansionModeExpansionModeCalculationOverrideGlobalMonitorSetting*

**override_global_options:** *bool*

**search:** *Literal['near_n', 'max_index']*




