/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */

define(['./when-c2e8ef35', './Check-c4f3a3fc', './Math-a06249ed', './Cartesian2-a4e73c05', './Transforms-5147dead', './RuntimeError-6122571f', './WebGLConstants-4ae0db90', './ComponentDatatype-762ab5b7', './GeometryAttribute-3113699c', './GeometryAttributes-57608efc', './IndexDatatype-755cb3fd', './GeometryOffsetAttribute-bc682dfe', './VertexFormat-5ae20b72', './CylinderGeometryLibrary-f26e7715', './CylinderGeometry-b3acf5c2'], function (when, Check, _Math, Cartesian2, Transforms, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, GeometryAttributes, IndexDatatype, GeometryOffsetAttribute, VertexFormat, CylinderGeometryLibrary, CylinderGeometry) { 'use strict';

    function createCylinderGeometry(cylinderGeometry, offset) {
            if (when.defined(offset)) {
                cylinderGeometry = CylinderGeometry.CylinderGeometry.unpack(cylinderGeometry, offset);
            }
            return CylinderGeometry.CylinderGeometry.createGeometry(cylinderGeometry);
        }

    return createCylinderGeometry;

});
//# sourceMappingURL=createCylinderGeometry.js.map
