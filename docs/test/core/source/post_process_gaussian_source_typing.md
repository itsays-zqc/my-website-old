


## PostProcessGaussianSource

```py
class maxoptics_sdk.core.source.post_process_gaussian_source_typing.PostProcessGaussianSource(*args, **kwargs)
```

__Bases__: dict


general: [PostProcessGaussianSourceGeneral](#PostProcessGaussianSourceGeneral)

geometry: [PostProcessGaussianSourceGeometry](#PostProcessGaussianSourceGeometry)



<span id='PostProcessGaussianSourceGeneral'></span>

## PostProcessGaussianSourceGeneral




```py
class maxoptics_sdk.core.source.post_process_gaussian_source_typing.PostProcessGaussianSourceGeneral(*args, **kwargs)
```

__Bases__: dict


| Parameter              | Type                               | Notes                                             |
|------------------------|------------------------------------|---------------------------------------------------|
| amplitude              | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| angle_phi              | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| angle_theta            | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| beam_settings          | [PostProcessGaussianSourceGeneralBeamSettings](#PostProcessGaussianSourceGeneralBeamSettings) |                                                  |
| direction              | Literal['forward', 'backward']      |                                                  |
| inject_axis            | Literal['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z'] | Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z']. |
| phase                  | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| polarization_angle     | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| rotation_offset        | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| waveform               | [PostProcessGaussianSourceGeneralWaveform](#PostProcessGaussianSourceGeneralWaveform) |                                                  |


<span id='PostProcessGaussianSourceGeneralBeamSettings'></span>

## PostProcessGaussianSourceGeneralBeamSettings

```py
class maxoptics_sdk.core.source.post_process_gaussian_source_typing.PostProcessGaussianSourceGeneralBeamSettings(*args, **kwargs)
```

__Bases__: dict



| Parameter              | Type                               | Notes                                             |
|------------------------|------------------------------------|---------------------------------------------------|
| beam_parameters        | Literal['waist_size_and_position', 'beam_size_and_divergence'] | Selections are ['waist_size_and_position', 'beam_size_and_divergence']. |
| beam_radius            | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| calculation_method     | Literal['use_scalar_approximation', 'use_vector_approximation'] | Selections are ['use_scalar_approximation', 'use_vector_approximation']. |
| distance_from_waist    | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| divergence_angle       | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| waist_radius           | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |


<span id='PostProcessGaussianSourceGeneralWaveform'></span>

## PostProcessGaussianSourceGeneralWaveform

```py
class maxoptics_sdk.core.source.post_process_gaussian_source_typing.PostProcessGaussianSourceGeneralWaveform(*args, **kwargs)
```

Bases: dict


| Parameter           | Type                               | Notes  |
|---------------------|------------------------------------|--------|
| waveform_id_select  | Waveform                           |        |

<span id='PostProcessGaussianSourceGeometry'></span>

## PostProcessGaussianSourceGeometry

```py
class maxoptics_sdk.core.source.post_process_gaussian_source_typing.PostProcessGaussianSourceGeometry(*args, **kwargs)
```

__Bases__: dict



| Parameter | Type                               | Notes                                             |
|-----------|------------------------------------|---------------------------------------------------|
| x         | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| x_max     | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| x_min     | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| x_span    | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| y         | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| y_max     | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| y_min     | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| y_span    | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| z         | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| z_max     | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| z_min     | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |
| z_span    | float \| int \| FloatParameter \| FloatParameterExpression |                                                  |

