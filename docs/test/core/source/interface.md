
## SourceInterface

```py
class maxoptics_sdk.core.source.interface.SourceInterface(*args, **kwargs)
Bases: Protocol
```
---
abstract __add__(*, type: Literal['mode_source'], name: str, axis: Literal['x_forward', 'y_forward', 'z_forward', 'x_backward', 'y_backward', 'z_backward'], property: PostProcessModeSource)

abstract __add__(*, type: Literal['gaussian_source'], name: str, axis: Literal['x_forward', 'y_forward', 'z_forward', 'x_backward', 'y_backward', 'z_backward'], property: PostProcessGaussianSource)

---

__Add a source to current project.__

<!-- Here's the representation of the given parameters as a Markdown table: -->

| Parameter | Description      |
| --------- | ---------------- |
| name      | Source name      |
| type      | Source type      |
| axis      | Source axis      |
| property  | Source property  |


## MODE_SOURCE



| default | type | notes |
|---------|------|-------|
| general.inject_axis | x_axis | string | Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z']. |
| general.direction | forward | string | Selections are ['forward', 'backward']. |
| general.amplitude | 1.0 | float | |
| general.phase | 0.0 | float | |
| general.mode_selection |  | string | Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import']. |
| general.mode_removal.threshold |  | float | |
| general.mode_index | 0 | integer | |
| general.search | max_index | string | Selections are ['near_n', 'max_index']. |
| general.n | 1.0 | float | |
| general.number_of_trial_modes | 20 | integer | |
| general.waveform.waveform_id_select |  | any | |
| general.rotations.theta | 0 | float | |
| general.rotations.phi | 0 | float | |
| general.rotations.rotation_offset | 0 | float | |
| geometry.x |  | float | |
| geometry.x_span |  | float | Restrained by condition: >=0. |
| geometry.x_min |  | float | |
| geometry.x_max |  | float | |
| geometry.y |  | float | |
| geometry.y_span |  | float | Restrained by condition: >=0. |
| geometry.y_min |  | float | |
| geometry.y_max |  | float | |
| geometry.z |  | float | |
| geometry.z_span |  | float | Restrained by condition: >=0. |
| geometry.z_min |  | float | |
| geometry.z_max |  | float | |

## GAUSSIAN_SOURCE

<!-- Here's the provided information formatted as a Markdown table: -->

| default                                | type            | notes                                |
|----------------------------------------|-----------------|--------------------------------------|
| general.inject_axis                    | x_axis          | string                               |
|                                        | y_axis          |                                      |
|                                        | z_axis          |                                      |
|                                        | x               |                                      |
|                                        | y               |                                      |
|                                        | z               |                                      |
| general.direction                      | forward         | string                               |
|                                        | backward        |                                      |
| general.amplitude                      | 1.0             | float                                |
| general.phase                          | 0.0             | float                                |
| general.waveform.waveform_id_select     |                 | waveform                             |
| general.angle_theta                     | 0               | float                                |
| general.angle_phi                       | 0               | float                                |
| general.rotation_offset                 | 0               | float                                |
| general.polarization_angle              | 0               | float                                |
| general.beam_settings.calculation_method | use_scalar_approximation | string                  |
|                                        | use_vector_approximation |                                      |
| general.beam_settings.beam_parameters   | waist_size_and_position | string                  |
|                                        | beam_size_and_divergence |                                      |
| general.beam_settings.waist_radius      |                 | float                                |
| general.beam_settings.distance_from_waist |                 | float                                |
| general.beam_settings.beam_radius       |                 | float                                |
| general.beam_settings.divergence_angle  |                 | float                                |
| geometry.x                             |                 | float                                |
| geometry.x_span                        |                 | float                                |
|                                        | Restrained by condition: >=0          |                                      |
| geometry.x_min                         |                 | float                                |
| geometry.x_max                         |                 | float                                |
| geometry.y                             |                 | float                                |
| geometry.y_span                        |                 | float                                |
|                                        | Restrained by condition: >=0          |                                      |
| geometry.y_min                         |                 | float                                |
| geometry.y_max                         |                 | float                                |
| geometry.z                             |                 | float                                |
| geometry.z_span                        |                 | float                                |
|                                        | Restrained by condition: >=0          |                                      |
| geometry.z_min                         |                 | float                                |
| geometry.z_max                         |                 | float                                |

<!-- Please note that there seems to be an issue with the formatting in the "notes" column, so I adjusted it for better readability.

Let me know if there's anything else I can assist you with! -->