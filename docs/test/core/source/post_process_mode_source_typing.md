
# post_process_mode_source_typing 

<span id='PostProcessModeSource'></span>

## PostProcessModeSource

    class maxoptics_sdk.core.source.post_process_mode_source_typing.PostProcessModeSource(*args, **kwargs)
__Bases__: dict



| Parameter       | Type                                      |
|-----------------|-------------------------------------------|
| bent_waveguide  | [PostProcessModeSourceBentWaveguide](#PostProcessModeSourceBentWaveguide)         |
| general         | [PostProcessModeSourceGeneral](#PostProcessModeSourceGeneral)               |
| geometry        | [PostProcessModeSourceGeometry](#PostProcessModeSourceGeometry)              |


<span id='PostProcessModeSourceBentWaveguide'></span>

## PostProcessModeSourceBentWaveguide

    class maxoptics_sdk.core.source.post_process_mode_source_typing.PostProcessModeSourceBentWaveguide(*args, **kwargs)
__Bases__: dict



| Parameter       | Type                                      | Notes                                             |
|-----------------|-------------------------------------------|---------------------------------------------------|
| bent_waveguide  | bool                                      |                                                  |
| location        | Literal['simulation_center']               |                                                  |
| orientation     | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| radius          | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |

<span id='PostProcessModeSourceGeneral'></span>

## PostProcessModeSourceGeneral
    class maxoptics_sdk.core.source.post_process_mode_source_typing.PostProcessModeSourceGeneral(*args, **kwargs)
__Bases__: dict

| Parameter         | Type                                                               |
|-------------------|--------------------------------------------------------------------|
| amplitude         | float \| int \| FloatParameter \| FloatParameterExpression         |
| direction         | Literal['forward', 'backward']                                     |
| inject_axis       | Literal['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z']                |
| mode_index        | int                                                                |
| mode_removal      | [PostProcessModeSourceGeneralModeRemoval](#PostProcessModeSourceGeneralModeRemoval)                            |
| mode_selection    | Literal['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import'] |
| n                 | float \| int \| FloatParameter \| FloatParameterExpression         |
| number_of_trial_modes | int                                                       |
| phase             | float \| int \| FloatParameter \| FloatParameterExpression         |
| rotations         | [PostProcessModeSourceGeneralRotations](#PostProcessModeSourceGeneralRotations)                             |
| search            | Literal['near_n', 'max_index']                                    |
| waveform          | [PostProcessModeSourceGeneralWaveform](#PostProcessModeSourceGeneralWaveform)                              |

<span id='PostProcessModeSourceGeneralModeRemoval'></span>

## PostProcessModeSourceGeneralModeRemoval
    class maxoptics_sdk.core.source.post_process_mode_source_typing.PostProcessModeSourceGeneralModeRemoval(*args, **kwargs)¶
__Bases__: dict

| Parameter         | Type                                                               |
|-------------------|--------------------------------------------------------------------|
| threshold         | float \| int \| FloatParameter \| FloatParameterExpression         |
| phi               | float \| int \| FloatParameter \| FloatParameterExpression         |
| rotation_offset   | float \| int \| FloatParameter \| FloatParameterExpression         |
| theta             | float \| int \| FloatParameter \| FloatParameterExpression         |

<span id='PostProcessModeSourceGeneralWaveform'></span>

## PostProcessModeSourceGeneralWaveform
    class maxoptics_sdk.core.source.post_process_mode_source_typing.PostProcessModeSourceGeneralWaveform(*args, **kwargs)
__Bases__: dict

| Parameter           | Type  |
|---------------------|-------|
| waveform_id_select  | Any   |


<span id='PostProcessModeSourceGeometry'></span>

## PostProcessModeSourceGeometry
    class maxoptics_sdk.core.source.post_process_mode_source_typing.PostProcessModeSourceGeometry(*args, **kwargs)
__Bases__: dict


| Parameter  | Type                               |
|------------|------------------------------------|
| x          | float \| int \| FloatParameter \| FloatParameterExpression |
| x_max      | float \| int \| FloatParameter \| FloatParameterExpression |
| x_min      | float \| int \| FloatParameter \| FloatParameterExpression |
| x_span     | float \| int \| FloatParameter \| FloatParameterExpression |
| y          | float \| int \| FloatParameter \| FloatParameterExpression |
| y_max      | float \| int \| FloatParameter \| FloatParameterExpression |
| y_min      | float \| int \| FloatParameter \| FloatParameterExpression |
| y_span     | float \| int \| FloatParameter \| FloatParameterExpression |
| z          | float \| int \| FloatParameter \| FloatParameterExpression |
| z_max      | float \| int \| FloatParameter \| FloatParameterExpression |
| z_min      | float \| int \| FloatParameter \| FloatParameterExpression |
| z_span     | float \| int \| FloatParameter \| FloatParameterExpression |

