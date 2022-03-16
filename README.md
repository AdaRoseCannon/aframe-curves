# AFrame-Curves
Components  for dealing with spline curves,

quick use, this will clone `#tracks-glb` along this curve. the `curve-point` don't need to be direct descendents of the `<a-curve>` you can nest them or stack them on each other. You can also move them around and the curve wil ladjust. Although if the number of the cloned models increases then it will need to perform an expensive operation so try
to avoid doing it on a per-frame basis but occasionally is fine.

```html
<script src="https://unpkg.com/aframe-curves@1.0.0/build/curve.min.js"></script>

<a-scene>
  <a-curve closed="true" tension="0.1" clone-along-curve="spacing: 0.06;scale:0.4 0.4 0.4;" gltf-model="#tracks-glb">
    <a-curve-point position="0 0 -3" gltf-model="#flag-glb"></a-curve-point>
    <a-curve-point position="-3 0 -3" gltf-model="#flag-glb"></a-curve-point>
    <a-curve-point position="-3 0 0" gltf-model="#flag-glb"></a-curve-point>
    <a-curve-point position="0 0 0" gltf-model="#flag-glb"></a-curve-point>
  </a-curve>
</a-scene>
```

<!--DOCS-->
### curve component

This defines a Catmull-Rom spline curve. It is exposed on el.components.curve.curve, 

| Property | Type    | Description                                                                                                                                                    | Default |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ |
| tension  | number  | [The Catmull-Rom Tension](https://www.w3.org/Graphics/SVG/WG/wiki/Path_Enhancements#:~:text=A%20Catmull%2DRom%20curve%20is,not%20through%2C%20the%20points%29) | 0.25    |
| closed   | boolean | Whether it joins back up with it's tail                                                                                                                        | false   |

### curve-point component

A point that tracks itself in 3D world space and updates the curve that it has changed.

No configuration required
### draw-curve component

| Property | Type     | Description                                                            | Default |
| :------- | :------- | :--------------------------------------------------------------------- | :------ |
| curve    | selector | Curve to draw, defaults to the curve on the same entity.               |         |
| spacing  | number   | How far apart to place the line segments, smaller is a smoother curve. | 0.5     |
| tangent  | boolean  | Draw curve tangents                                                    | false   |
| normal   | boolean  | Draw curve normals                                                     | false   |
| length   | number   | Length to draw the normal and tangent markers                          | 0.1     |

### clone-along-curve component

Apply this to the curve element, or set one seperately, to instance element at fixed intervals along a curve. They will be rotated to follw the curve.

| Property | Type     | Description                                                                            | Default             |
| :------- | :------- | :------------------------------------------------------------------------------------- | :------------------ |
| curve    | selector | Optional, pick a particular curve to use, it defaults to the curve on it's own element |                     |
| spacing  | number   | How far apart to place the elements                                                    | 1                   |
| scale    | vec3     | Scale of the elements                                                                  | {"x":1,"y":1,"z":1} |

### &lt;a-curve&gt;

Describes a curve doesn't display anything unless one of the other components is used

**Default Components:**

| Default component | Settings |
| :---------------- | :------- |
| curve             | {}       |

**Entity Attribute Mappings:**

| Property | Mapping         |
| :------- | :-------------- |
| closed   | "curve.closed"  |
| tension  | "curve.tension" |

### &lt;a-curve-point&gt;

This is used to set the control points of the curve, they don't need to be immediate children.

**Default Components:**

| Default component | Settings |
| :---------------- | :------- |
| curve-point       | {}       |

### &lt;a-draw-curve&gt;

Describes a curve this uses the draw-curve component to draw a line where the curve is.

**Default Components:**

| Default component | Settings |
| :---------------- | :------- |
| draw-curve        | {}       |
| curve             | {}       |

**Entity Attribute Mappings:**

| Property | Mapping            |
| :------- | :----------------- |
| curve    | "draw-curve.curve" |
| closed   | "curve.closed"     |
| tension  | "curve.tension"    |

<!--DOCS_END-->
