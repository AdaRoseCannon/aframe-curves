# AFrame-Curves
Components  for dealing with spline curves

<!--DOCS-->
### curve component

This defines a catmull rom spline curve. It is exposed on el.components.curve.curve, 

| Property | Type    | Description                             | Default |
| :------- | :------ | :-------------------------------------- | :------ |
| tension  | number  |                                         | 0.25    |
| closed   | boolean | Whether it joins back up with it's tail | false   |

### curve-point component

A point that tracks itself in 3D world space and updates the curve that it has changed.

No configuration required
### draw-curve component

| Property | Type     | Description | Default |
| :------- | :------- | :---------- | :------ |
| curve    | selector |             |         |
| spacing  | number   |             | 0.5     |
| tangent  | boolean  |             | false   |
| normal   | boolean  |             | false   |
| length   | number   |             | 0.1     |

### clone-along-curve component

| Property | Type     | Description | Default             |
| :------- | :------- | :---------- | :------------------ |
| curve    | selector |             |                     |
| spacing  | number   |             | 1                   |
| scale    | vec3     |             | {"x":1,"y":1,"z":1} |

### &lt;a-draw-curve&gt;

| Default component | Settings |
| :---------------- | :------- |
| draw-curve        | {}       |
|                   |          |

### &lt;a-curve-point&gt;

| Default component | Settings |
| :---------------- | :------- |
| curve-point       | {}       |

### &lt;a-curve&gt;

| Default component | Settings |
| :---------------- | :------- |
| curve             | {}       |
|                   |          |
|                   |          |

<!--DOCS_END-->
