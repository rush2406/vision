Search.setIndex({docnames:["containers","containers/CameraGeometry","containers/Extrinsics","containers/Intrinsics","containers/PrimitiveScene","docs/ivy","docs/ivy_gym","docs/ivy_mech","docs/ivy_memory","docs/ivy_robot","docs/ivy_vision","index","index_prepend","optical_flow","optical_flow/depth_from_flow_and_cam_mats","optical_flow/flow_from_cam_coords_id_image_and_object_trans","optical_flow/flow_from_depth_and_cam_mats","optical_flow/pixel_cost_volume","optical_flow/project_cam_coords_with_object_transformations","optical_flow/project_flow_to_epipolar_line","optical_flow/velocity_from_cam_coords_id_image_and_object_trans","optical_flow/velocity_from_flow_cam_coords_and_cam_mats","projective_geometry","projective_geometry/projection_matrix_inverse","projective_geometry/projection_matrix_pseudo_inverse","projective_geometry/solve_homogeneous_dlt","projective_geometry/transform","rendering","rendering/coord_image_to_trimesh","rendering/create_trimesh_indices_for_image","rendering/pad_omni_image","rendering/quantize_pixel_coords","rendering/rasterize_triangles","rendering/smooth_image_fom_var_image","rendering/weighted_image_smooth","sdf","sdf/cuboid_signed_distances","sdf/sphere_signed_distances","single_view_geometry","single_view_geometry/angular_pixel_to_sphere_coords","single_view_geometry/bilinearly_interpolate_image","single_view_geometry/calib_and_ext_to_full_mat","single_view_geometry/cam_to_pixel_coords","single_view_geometry/cam_to_sphere_coords","single_view_geometry/cam_to_world_coords","single_view_geometry/create_uniform_pixel_coords_image","single_view_geometry/ext_mat_and_intrinsics_to_cam_geometry_object","single_view_geometry/focal_lengths_and_pp_offsets_to_calib_mat","single_view_geometry/focal_lengths_and_pp_offsets_to_intrinsics_object","single_view_geometry/focal_lengths_to_persp_angles","single_view_geometry/inv_ext_mat_and_intrinsics_to_cam_geometry_object","single_view_geometry/inv_ext_mat_to_camera_center","single_view_geometry/persp_angles_and_pp_offsets_to_intrinsics_object","single_view_geometry/persp_angles_to_focal_lengths","single_view_geometry/pixel_coords_to_world_ray_vectors","single_view_geometry/pixel_to_cam_coords","single_view_geometry/pixel_to_sphere_coords","single_view_geometry/pixel_to_world_coords","single_view_geometry/rot_mat_and_cam_center_to_ext_mat","single_view_geometry/sphere_to_angular_pixel_coords","single_view_geometry/sphere_to_cam_coords","single_view_geometry/sphere_to_pixel_coords","single_view_geometry/world_to_cam_coords","single_view_geometry/world_to_pixel_coords","supported_frameworks","two_view_geometry","two_view_geometry/angular_pixel_to_angular_pixel_coords","two_view_geometry/cam_to_cam_coords","two_view_geometry/closest_mutual_points_along_two_skew_rays","two_view_geometry/get_fundamental_matrix","two_view_geometry/pixel_to_pixel_coords","two_view_geometry/sphere_to_sphere_coords","two_view_geometry/triangulate_depth","voxel_grids","voxel_grids/coords_to_voxel_grid","warping"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["containers.rst","containers/CameraGeometry.rst","containers/Extrinsics.rst","containers/Intrinsics.rst","containers/PrimitiveScene.rst","docs/ivy.rst","docs/ivy_gym.rst","docs/ivy_mech.rst","docs/ivy_memory.rst","docs/ivy_robot.rst","docs/ivy_vision.rst","index.rst","index_prepend.rst","optical_flow.rst","optical_flow/depth_from_flow_and_cam_mats.rst","optical_flow/flow_from_cam_coords_id_image_and_object_trans.rst","optical_flow/flow_from_depth_and_cam_mats.rst","optical_flow/pixel_cost_volume.rst","optical_flow/project_cam_coords_with_object_transformations.rst","optical_flow/project_flow_to_epipolar_line.rst","optical_flow/velocity_from_cam_coords_id_image_and_object_trans.rst","optical_flow/velocity_from_flow_cam_coords_and_cam_mats.rst","projective_geometry.rst","projective_geometry/projection_matrix_inverse.rst","projective_geometry/projection_matrix_pseudo_inverse.rst","projective_geometry/solve_homogeneous_dlt.rst","projective_geometry/transform.rst","rendering.rst","rendering/coord_image_to_trimesh.rst","rendering/create_trimesh_indices_for_image.rst","rendering/pad_omni_image.rst","rendering/quantize_pixel_coords.rst","rendering/rasterize_triangles.rst","rendering/smooth_image_fom_var_image.rst","rendering/weighted_image_smooth.rst","sdf.rst","sdf/cuboid_signed_distances.rst","sdf/sphere_signed_distances.rst","single_view_geometry.rst","single_view_geometry/angular_pixel_to_sphere_coords.rst","single_view_geometry/bilinearly_interpolate_image.rst","single_view_geometry/calib_and_ext_to_full_mat.rst","single_view_geometry/cam_to_pixel_coords.rst","single_view_geometry/cam_to_sphere_coords.rst","single_view_geometry/cam_to_world_coords.rst","single_view_geometry/create_uniform_pixel_coords_image.rst","single_view_geometry/ext_mat_and_intrinsics_to_cam_geometry_object.rst","single_view_geometry/focal_lengths_and_pp_offsets_to_calib_mat.rst","single_view_geometry/focal_lengths_and_pp_offsets_to_intrinsics_object.rst","single_view_geometry/focal_lengths_to_persp_angles.rst","single_view_geometry/inv_ext_mat_and_intrinsics_to_cam_geometry_object.rst","single_view_geometry/inv_ext_mat_to_camera_center.rst","single_view_geometry/persp_angles_and_pp_offsets_to_intrinsics_object.rst","single_view_geometry/persp_angles_to_focal_lengths.rst","single_view_geometry/pixel_coords_to_world_ray_vectors.rst","single_view_geometry/pixel_to_cam_coords.rst","single_view_geometry/pixel_to_sphere_coords.rst","single_view_geometry/pixel_to_world_coords.rst","single_view_geometry/rot_mat_and_cam_center_to_ext_mat.rst","single_view_geometry/sphere_to_angular_pixel_coords.rst","single_view_geometry/sphere_to_cam_coords.rst","single_view_geometry/sphere_to_pixel_coords.rst","single_view_geometry/world_to_cam_coords.rst","single_view_geometry/world_to_pixel_coords.rst","supported_frameworks.rst","two_view_geometry.rst","two_view_geometry/angular_pixel_to_angular_pixel_coords.rst","two_view_geometry/cam_to_cam_coords.rst","two_view_geometry/closest_mutual_points_along_two_skew_rays.rst","two_view_geometry/get_fundamental_matrix.rst","two_view_geometry/pixel_to_pixel_coords.rst","two_view_geometry/sphere_to_sphere_coords.rst","two_view_geometry/triangulate_depth.rst","voxel_grids.rst","voxel_grids/coords_to_voxel_grid.rst","warping.rst"],objects:{"ivy_vision.containers":{CameraGeometry:[1,1,1,""],Extrinsics:[2,1,1,""],Intrinsics:[3,1,1,""],PrimitiveScene:[4,1,1,""]},"ivy_vision.containers.CameraGeometry":{__init__:[1,2,1,""],as_identity:[1,2,1,""],as_keras_inputs:[1,2,1,""],as_tensor_spec:[1,2,1,""],batch_shape:[1,2,1,""],set_slice:[1,2,1,""]},"ivy_vision.containers.Extrinsics":{__init__:[2,2,1,""],as_identity:[2,2,1,""],as_keras_inputs:[2,2,1,""],as_tensor_spec:[2,2,1,""],batch_shape:[2,2,1,""],set_slice:[2,2,1,""]},"ivy_vision.containers.Intrinsics":{__init__:[3,2,1,""],as_identity:[3,2,1,""],as_keras_inputs:[3,2,1,""],as_tensor_spec:[3,2,1,""],batch_shape:[3,2,1,""],set_slice:[3,2,1,""]},"ivy_vision.containers.PrimitiveScene":{__init__:[4,2,1,""],as_identity:[4,2,1,""],as_keras_inputs:[4,2,1,""],as_tensor_spec:[4,2,1,""],batch_shape:[4,2,1,""],sdf:[4,2,1,""],set_slice:[4,2,1,""]},"ivy_vision.optical_flow":{depth_from_flow_and_cam_mats:[14,3,1,""],flow_from_cam_coords_id_image_and_object_trans:[15,3,1,""],flow_from_depth_and_cam_mats:[16,3,1,""],pixel_cost_volume:[17,3,1,""],project_cam_coords_with_object_transformations:[18,3,1,""],project_flow_to_epipolar_line:[19,3,1,""],velocity_from_cam_coords_id_image_and_object_trans:[20,3,1,""],velocity_from_flow_cam_coords_and_cam_mats:[21,3,1,""]},"ivy_vision.projective_geometry":{projection_matrix_inverse:[23,3,1,""],projection_matrix_pseudo_inverse:[24,3,1,""],solve_homogeneous_dlt:[25,3,1,""],transform:[26,3,1,""]},"ivy_vision.rendering":{coord_image_to_trimesh:[28,3,1,""],create_trimesh_indices_for_image:[29,3,1,""],pad_omni_image:[30,3,1,""],quantize_pixel_coords:[31,3,1,""],rasterize_triangles:[32,3,1,""],smooth_image_fom_var_image:[33,3,1,""],weighted_image_smooth:[34,3,1,""]},"ivy_vision.sdf":{cuboid_signed_distances:[36,3,1,""],sphere_signed_distances:[37,3,1,""]},"ivy_vision.single_view_geometry":{angular_pixel_to_sphere_coords:[39,3,1,""],bilinearly_interpolate_image:[40,3,1,""],calib_and_ext_to_full_mat:[41,3,1,""],cam_to_pixel_coords:[42,3,1,""],cam_to_sphere_coords:[43,3,1,""],cam_to_world_coords:[44,3,1,""],create_uniform_pixel_coords_image:[45,3,1,""],ext_mat_and_intrinsics_to_cam_geometry_object:[46,3,1,""],focal_lengths_and_pp_offsets_to_calib_mat:[47,3,1,""],focal_lengths_and_pp_offsets_to_intrinsics_object:[48,3,1,""],focal_lengths_to_persp_angles:[49,3,1,""],inv_ext_mat_and_intrinsics_to_cam_geometry_object:[50,3,1,""],inv_ext_mat_to_camera_center:[51,3,1,""],persp_angles_and_pp_offsets_to_intrinsics_object:[52,3,1,""],persp_angles_to_focal_lengths:[53,3,1,""],pixel_coords_to_world_ray_vectors:[54,3,1,""],pixel_to_cam_coords:[55,3,1,""],pixel_to_sphere_coords:[56,3,1,""],pixel_to_world_coords:[57,3,1,""],rot_mat_and_cam_center_to_ext_mat:[58,3,1,""],sphere_to_angular_pixel_coords:[59,3,1,""],sphere_to_cam_coords:[60,3,1,""],sphere_to_pixel_coords:[61,3,1,""],world_to_cam_coords:[62,3,1,""],world_to_pixel_coords:[63,3,1,""]},"ivy_vision.two_view_geometry":{angular_pixel_to_angular_pixel_coords:[66,3,1,""],cam_to_cam_coords:[67,3,1,""],closest_mutual_points_along_two_skew_rays:[68,3,1,""],get_fundamental_matrix:[69,3,1,""],pixel_to_pixel_coords:[70,3,1,""],sphere_to_sphere_coords:[71,3,1,""],triangulate_depth:[72,3,1,""]},"ivy_vision.voxel_grids":{coords_to_voxel_grid:[74,3,1,""]},ivy_vision:{containers:[0,0,0,"-"],optical_flow:[13,0,0,"-"],projective_geometry:[22,0,0,"-"],rendering:[27,0,0,"-"],sdf:[35,0,0,"-"],single_view_geometry:[38,0,0,"-"],two_view_geometry:[65,0,0,"-"],voxel_grids:[73,0,0,"-"],warping:[75,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"001":[27,31],"02886":11,"1000000000000":[27,31],"154":[38,45,49,53],"155":[38,42,47,55,57,63],"156":[22,23,38,44,51,57,62,63],"157":[38,58],"161":[22,24],"180":11,"2021":11,"2102":11,"244":[65,69],"255":11,"512":11,"\u03b8_x":[38,49,52,53],"\u03b8_y":[38,49,52,53],"\u03bb":[38,54],"\u03bb_1":[65,68],"\u03bb_2":[65,68],"boolean":[27,28],"case":11,"class":[0,1,2,3,4,11],"default":[13,14,27,31,65,72],"final":[27,31,38,45,73,74],"float":[27,31,38,39,45,59,65,66],"function":[0,4,11,13,22,27,35,38,65,68,73],"import":11,"int":[0,1,2,3,4,13,14,15,16,17,18,19,20,21,22,24,26,27,28,29,30,31,32,33,34,35,36,38,40,42,43,44,45,46,47,48,49,50,52,53,54,55,56,57,58,60,61,62,63,65,66,67,68,69,70,71,72,73,74],"new":[0,1,2,3,4,11,27,30,31],"return":[0,1,2,3,4,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,65,66,67,68,69,70,71,72,73,74],"static":[0,1,2,3,4,11],"true":11,"var":[27,33],"while":[11,38,45],For:11,RES:[73,74],The:[0,4,11,27,33,34,35,36,37,38,45,65,68],There:11,These:11,__init__:[0,1,2,3,4],_coord:[73,74],_imag:[27,31],_shape:[27,31],abov:11,abs:11,accept:11,acquir:11,across:[73,74],addit:11,after:[0,1,2,3,4],again:11,align:[65,68],all:[0,1,2,3,4,11,38,45,73,74],allow:11,along:[27,33,38,54,65,68],also:[11,73,74],alwai:[38,45],amd:[27,28],angl:[0,3,38,49,52,53],angular:[38,39,59,65,66],angular_pixel_coord:[38,39],angular_pixel_coords1:[65,66],angular_pixel_to_angular_pixel_coord:[11,65],angular_pixel_to_sphere_coord:[11,38],ani:11,anoth:11,answer:[65,68],appli:11,applic:[0,1,2,3,4],approach:[11,13,14,65,72],area:11,around:11,arrai:[0,1,2,3,4,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,65,66,67,68,69,70,71,72,73,74],articl:11,arxiv:11,as_ident:[0,1,2,3,4],as_keras_input:[0,1,2,3,4],as_tensor_spec:[0,1,2,3,4],aspect:11,assert:11,assum:[11,27,31,35,36,38,45],astyp:11,attribut:[0,1,2,3,4,11],author:11,avail:11,averag:[27,31,73,74],backend:11,base:[0,1,2,3,4,11,27,32,33,34],basic:[11,27,32],batch:[0,1,2,3,4,13,14,15,16,17,18,19,20,21,22,24,26,27,28,29,31,32,35,36,38,40,42,43,44,45,46,47,48,50,52,54,55,56,57,58,60,61,62,63,65,66,67,68,69,70,71,72,73,74],batch_shap:[0,1,2,3,4,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,65,66,67,68,69,70,71,72,73,74],been:[27,31],below:11,beneft:11,between:[11,13,17,20,21,65,68,69],bilinear_resampl:11,bilinearli:[11,38,40],bilinearly_interpolate_imag:[11,38],bool:[27,31,38,45],both:11,bottom:[11,22,24,25,65,69],boundari:[73,74],buffer:[11,27,31],built:11,calcul:[11,38,54],calib_and_ext_to_full_mat:[11,38],calib_mat:[0,3,11,13,15,38,41,42,61],calibr:[0,3,13,15,38,41,42,47,55,56,61],cam1_geom:11,cam1_inv_ext_mat:11,cam1to2_ext_mat:[65,66,67,71],cam1to2_full_mat:[11,13,16,65,70],cam1to2_full_mat_homo:11,cam2_geom:11,cam2_inv_ext_mat:11,cam:11,cam_1_to_2_ext_mat:[13,15,18],cam_cent:[0,2,11],cam_coord:[38,43],cam_coords1:[65,67],cam_coords_1:[13,18],cam_coords_f1:[13,15],cam_coords_t:[13,20,21],cam_coords_tm1:[13,21],cam_geom:[0,1,11],cam_persp_angl:11,cam_tm1_to_t_ext_mat:[13,21],cam_to_cam_coord:[11,65],cam_to_pixel_coord:[11,38],cam_to_sphere_coord:[11,38],cam_to_world_coord:[11,38],camera1:[13,16,65,66,67,70,71],camera2:[13,16,65,66,67,70,71],camera:[0,1,2,3,11,13,14,15,16,18,20,21,27,31,38,39,42,43,44,46,48,50,51,52,54,55,56,58,59,60,61,62,65,66,67,68,69,70,71,72],camera_cent:[13,14,38,54,58,65,68,72],camera_center1:[65,69],camera_intrins:[38,46,50],camerageometri:[0,11],can:[11,38,45,54],captur:11,cartesian:[11,13,21,38,43,60],center:[0,2,13,14,38,51,54,58,65,68,69,72],central:11,centric:[11,13,15,18,20,21,38,39,42,43,44,54,55,56,57,59,60,61,62,63,65,66,67,68,71],channel:[27,31,33],check:11,choose_random_framework:11,clark:11,click:11,clip:[27,31],closest:[13,14,35,36,37,65,68,72],closest_mutual_point:[13,14,65,72],closest_mutual_points_along_two_skew_rai:[11,65],cloud:11,cmp:[13,14,65,72],code:11,collect:[13,22,27,35,38,65,73],color1:11,color2:11,color2_warp_to_f1:11,color2_warp_to_f1_mask:11,color:11,column:11,com:[27,32],combin:[38,57,63],common:11,commun:11,compar:11,comparison:[13,17],composit:[0,4],comput:[13,14,15,16,17,18,20,21,22,23,24,38,41,47,49,51,53,65,68,69],concaten:[11,65,68],cone:[0,4],connect:[13,19,65,69],consid:11,construct:11,contain:[1,2,3,4,11,13,15,18,20,27,28,73,74],convert:[11,38,39,43,56,59,60,61,65,66,71],coord:[11,22,26,27,28,31,73,74],coord_bound:[73,74],coord_image_to_trimesh:[11,27],coord_img:[27,28],coordin:[11,27,31],coordint:[73,74],coords_to_voxel_grid:[11,73],coords_wrt_cam:[38,42,44],coords_wrt_world:[38,62,63],core:[0,1,2,3,4],corner:[11,38,45,73,74],correct:[27,30],correspond:11,cost:[13,17],could:11,counter:[27,31],covari:[27,31],cover:11,cpu:[13,14,19,20,21,27,28,29,31,32,33,38,44,45,46,47,49,50,53,55,57,60,62,65,67,68,69,70,73,74],creat:[13,14,19,20,21,27,28,29,31,32,33,38,44,45,46,47,48,49,50,52,53,55,57,60,62,65,67,68,69,70,73,74],create_trimesh_indices_for_imag:[11,27],create_uniform_pixel_coords_imag:[11,38],cuboid:[0,4,35,36],cuboid_dim:[0,4,35,36],cuboid_ext_mat:[0,4,35,36],cuboid_signed_dist:[11,35],cuda:[13,14,19,20,21,27,28,29,31,32,33,38,44,45,46,47,49,50,53,55,57,60,62,65,67,68,69,70,73,74],current:11,cv2:11,cylind:[0,4],daniel:11,data:11,data_dir:11,deduct:[38,45,49,53],deep:11,defin:11,degre:[38,39,59,65,66],delta_t:[13,20,21],demonstr:11,depend:[73,74],depth1:11,depth1_from_flow:11,depth1_wrt_f2:11,depth2:11,depth2_warp_to_f1:11,depth:[11,13,14,16,27,31,38,42,45,55,56,57,61,63,65,67,70,72],depth_from_flow_and_cam_mat:[11,13],depth_valid:11,descript:[0,4],desir:[0,1,2,3,4],determin:11,dev_str:[13,14,19,20,21,27,28,29,31,32,33,38,44,45,46,47,49,50,53,55,57,60,62,65,67,68,69,70,73,74],develop:11,devic:[13,14,19,20,21,27,28,29,31,32,33,38,44,45,46,47,49,50,53,55,57,60,62,65,67,68,69,70,73,74],diagon:[27,31],dictat:[38,54],differ:[11,13,20,21,27,31],differenti:11,dim:[11,73,74],dimens:[0,4,13,14,15,16,18,19,20,21,22,26,27,28,29,30,31,32,33,34,35,36,38,40,42,43,44,45,48,49,52,53,54,55,56,57,60,61,62,63,65,66,67,68,70,71,72,73,74],dimension:[22,26,73,74],direct:[27,30,31,73,74],directli:11,distanc:[0,4,11,35,36,37],dlt:[13,14,22,25,65,72],doc:11,doe:11,downward:[38,45],duplic:[11,27,31],dure:[27,31],dynam:11,each:[0,1,2,3,4,11,27,33,34,38,45,54,65,68,73,74],edg:[27,30],ego:[38,39,43,56,59,60,61,65,66,71],either:[0,1,2,3,4,11,73,74],element:[0,1,2,3,4],els:11,end:11,entri:[0,1,2,3,4,73,74],environ:11,epipolar:[13,19],equal:[0,1,2,3,4],equat:[22,25,38,42,44,45,47,51,55,57,58,62,63,65,69],etc:[13,14,19,20,21,27,28,29,31,32,33,38,44,45,46,47,49,50,53,55,57,60,62,65,67,68,69,70,73,74],exampl:11,expand:11,expand_dim:11,explain:11,ext_mat:[38,41,46,62],ext_mat_and_intrinsics_to_cam_geometry_object:[11,38],ext_mats_homo:[0,2,11],extend:[0,4],extrins:[0,1,4,11,13,15,18,21,35,36,38,41,44,46,50,51,58,62,65,66,67,69,71],f1_forward_warp_no_db:11,f1_forward_warp_w_db:11,f_x:[38,47,48,49,53],f_y:[38,47,48,49,53],fabian:11,fabio:11,falck:11,fals:[11,27,31,38,45],famili:11,featur:[13,17,27,31,73,74],feature_s:[73,74],feel:11,figur:[38,49,53],file:11,fill:[27,31],final_image_dim:[27,31],first:[11,13,17,65,70],float32:11,flow1to2:11,flow:[11,14,15,16,19,21],flow_from_cam_coords_id_image_and_object_tran:[11,13],flow_from_depth_and_cam_mat:[11,13],flow_t_to_tm1:[13,21],flownet:[13,17],focal:[0,3,38,47,48,49,53],focal_length:[0,3,11,38,47,48,49],focal_lengths_and_pp_offsets_to_calib_mat:[11,38],focal_lengths_and_pp_offsets_to_intrinsics_object:[11,38],focal_lengths_to_persp_angl:[11,38],focus:11,folder:11,format:11,former:[38,45],forum:[65,68],forward:11,found:11,frame:[11,13,14,15,16,18,19,20,21,38,54,65,66,67,69,70,71,72],framework:[1,2,3,4,11,14,15,16,17,18,19,20,21,23,24,25,26,28,29,30,31,32,33,34,36,37,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,66,67,68,69,70,71,72,74],framework_util:11,freeli:11,from:[11,13,14,15,16,17,18,19,20,21,22,24,26,27,28,30,31,32,33,34,35,36,37,38,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,62,63,65,66,67,68,69,70,71,72,73,74],frombuff:11,full:[0,1,11,13,14,16,38,41,54,57,63,65,69,70,72],full_mat1:[65,69],full_mat2:[65,69],full_mat:[11,13,14,38,63,65,72],full_mats_homo:[0,1,11],fulli:11,fund_mat:[13,19],fundament:[13,19,65,69],further:11,gener:[11,22],geometr:[0,1,2,3,4],geometri:[0,1,11,13,14,16,46,50],get:[38,42,44,55,57,58,62,63],get_fundamental_matrix:[11,65],github:11,given:[11,22,23,24,25,27,29,65,69,70],grid:[11,74],grip:11,gym:11,hand:11,happi:11,has:11,have:[11,27,31],height:[22,26,38,45,48,52],here:11,hold:[38,45],hole:11,homogen:[0,1,2,11,13,14,15,16,18,19,20,21,22,25,27,31,38,42,43,44,45,54,55,56,57,60,61,62,63,65,67,68,70,72,73,74],hope:11,host:[27,31],how:11,howev:11,http:[27,32],hxw:[27,28],hypothet:11,icon:11,id_imag:[13,15,18,20],ident:[0,1,2,3,4],ids:[13,15,18,20],imag:[11,13,14,15,16,17,18,19,20,21,22,26,27,28,29,30,31,32,33,34,38,39,40,42,43,44,45,48,49,52,53,54,55,56,57,59,60,61,62,63,65,66,67,68,70,71,72],image1:[13,17],image2:[13,17],image_dim:[13,14,15,16,18,19,20,21,22,26,27,28,29,30,32,38,40,42,43,44,45,48,49,52,53,54,55,56,57,60,61,62,63,65,66,67,68,70,71,72],img_dim:11,implement:[27,32],improv:11,imread:11,includ:[0,4,11],index:[65,68],indic:[27,28,29],infer:[11,13,14,15,16,17,18,19,20,21,22,24,26,27,28,30,31,32,38,40,42,43,44,46,47,48,50,52,54,55,56,57,58,60,61,62,63,65,66,67,68,69,70,71,72,73,74],initi:[0,1,2,3,4],input:[0,1,2,3,4,13,14,15,16,17,18,19,20,21,22,24,26,27,28,30,31,32,38,40,42,43,44,46,47,48,50,52,54,55,56,57,58,60,61,62,63,65,66,67,68,69,70,71,72,73,74],input_s:[27,31,32],insid:[73,74],instal:11,instead:11,integ:[11,13,14,19,21,27,31,38,45],inter:11,interest:11,intermedi:11,interpol:[11,38,40],intrins:[0,1,4,11,38,46,48,50,52],inv:11,inv_calib_mat:[0,3,11,38,55,56],inv_ext_mat:[38,44,50,51],inv_ext_mat_and_intrinsics_to_cam_geometry_object:[11,38],inv_ext_mat_to_camera_cent:[11,38],inv_ext_mats_homo:[0,2,11],inv_full_mat:[13,14,38,54,57,65,72],inv_full_mats_homo:[0,1,11],inv_r:[0,2,11],invers:[0,1,2,3,4,11,13,14,22,23,24,38,44,50,51,54,55,56,57,65,69,72],ivi:[0,1,2,3,4,11],ivy_demo_util:11,ivy_vis:[0,1,2,3,4,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,65,66,67,68,69,70,71,72,73,74],jame:11,jax:11,journal:11,kera:[0,1,2,3,4],kernel:[27,33,34],kernel_dim:[27,33,34],kernel_scal:[27,33],known:11,largest:[73,74],lead:[11,27,31],learn:11,left:[38,45],length:[0,3,38,47,48,49,53],lenton2021ivi:11,lenton:11,lesson:[27,32],librari:11,like:11,line:[13,19],load:11,locat:[38,40],look:11,low:[73,74],magnitud:[38,54],mai:[27,31,73,74],make:11,mani:11,map:[13,14,16,73,74],mask:[11,27,28],mat:11,mathbb:[13,14,16,17,19,22,23,24,25,26,27,31,38,39,40,41,42,43,44,45,46,47,50,51,54,55,56,57,58,59,60,61,62,63,65,66,67,68,69,70,71,72,73,74],mathbf:[13,14,16,17,19,22,23,24,25,26,27,31,38,39,40,41,42,43,44,45,46,47,50,51,54,55,56,57,58,59,60,61,62,63,65,66,67,68,69,70,71,72,73,74],matmul:11,matric:[0,1,2,3,4,11,13,14,35,36,65,69,72],matrix:[11,13,15,16,18,19,21,22,23,24,25,26,38,41,42,44,46,47,50,51,54,55,56,57,58,61,62,63,65,66,67,69,70,71],maximum:[73,74],mean:[11,27,31,33,34,73,74],measur:[13,21],mech:11,mechan:11,memori:11,mesh:[11,27,29],met:11,method:[11,13,14,22,25,65,72],metr:[73,74],middl:[22,23],minimum:[73,74],miss:11,mode:[27,31,73,74],modul:[0,4,11],more:11,most:11,move:11,mutual:[13,14,65,68,72],mxnd:11,mxnet:11,name:[0,1,2,3,4],need:11,next:11,non:[27,31],none:[0,4,13,14,15,16,17,18,19,20,21,22,24,26,27,28,30,31,32,33,35,36,38,40,42,43,44,45,46,47,48,49,50,52,53,54,55,56,57,58,60,61,62,63,65,66,67,68,69,70,71,72,73,74],normal:[27,31,38,45,73,74],note:[73,74],now:11,npy:11,num:[73,74],num_cuboid:[0,4,35,36],num_obj:[13,15,18,20],num_point:[0,4,35,36,37],num_spher:[0,4,35,37],number:[27,30,38,39,59,65,66,73,74],numpi:11,obj_id:[13,15,18,20],obj_tran:[13,15,18,20],object:[0,1,2,3,4,13,15,18,20,38,46,48,50,52],occupi:[73,74],offer:11,offset:[0,3,38,47,48,52],omni:[27,30,31],onc:[0,4],one:[11,13,14,27,31,65,72],ones:[38,45],ongo:11,onli:[0,1,2,3,4,11],optic:[11,14,15,16,19,21],optical_flow:[13,14,15,16,17,18,19,20,21],option:[0,4,11,13,14,15,16,17,18,19,20,21,22,24,26,27,28,29,30,31,32,33,35,36,38,40,42,43,44,45,46,47,48,49,50,52,53,54,55,56,57,58,60,61,62,63,65,66,67,68,69,70,71,72,73,74],order:[0,4,11,35,36],ordin:[11,13,14,15,16,18,19,20,21,22,26,27,28,31,38,39,40,42,43,44,45,54,55,56,57,59,60,61,62,63,65,66,67,68,70,71,72,73,74],ordinart:11,origin:[38,45,73,74],other:[11,27,31],our:11,out:11,over:[13,15,18,20],overset:[38,51,54,58,65,68],p_x:[38,47,48,52],p_y:[38,47,48,52],pad:[27,30],pad_omni_imag:[11,27],pad_siz:[27,30],page:[11,22,23,24,25,38,42,44,45,47,49,51,53,55,57,58,62,63,65,69],paper:[13,17],param:11,paramet:[0,1,2,3,4,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,65,66,67,68,69,70,71,72,73,74],parameter:[38,54],pardo:11,part:11,particular:11,patch:[13,17],per:[13,15,18,20,38,39,59,65,66],perform:[11,27,30],persp_angl:[0,3,11,38,52,53],persp_angles_and_pp_offsets_to_intrinsics_object:[11,38],persp_angles_to_focal_length:[11,38],perspect:[0,3,38,49,52,53],pinv_full_mat1:[65,69],pip:11,pix_coords_w_color_in_f1:11,pixel:[11,13,14,15,16,18,19,20,21,27,30,31,33,34,38,39,40,42,45,54,55,56,57,59,61,63,65,66,67,68,70,72,73,74],pixel_coord:[27,31,38,54,55,56,57,65,72],pixel_coords1:[11,13,16,65,70],pixel_coords1_proj:11,pixel_coords1_wrt_f2:11,pixel_coords2:11,pixel_coords_to_world_ray_vector:[11,38],pixel_coords_triangl:[27,32],pixel_coords_var:[27,31],pixel_cost_volum:[11,13],pixel_to_cam_coord:[11,38],pixel_to_pixel_coord:[11,65],pixel_to_sphere_coord:[11,38],pixel_to_world_coord:[11,38],pixels_per_degre:[38,39,59,65,66],png:11,point:[0,3,4,11,13,14,35,36,37,38,45,47,48,52,65,68,72],polar:[27,31,38,39,43,56,59,60,61,65,66,71],portabl:11,posit:[0,4,35,37,38,54],pp_offset:[0,3,11,38,47,48,52],practic:[27,32],predominantli:11,prefix:[0,1,2,3,4],preprint:11,present:11,previous:11,primit:[0,4],primitive_scen:[0,4],primitivescen:[0,11],princip:[0,3,38,47,48,52],prior:[27,31],prior_var:[27,31],process:11,produc:[22,26],proj:[27,31],proj_mat:[22,23,24],project:[0,1,11,13,14,15,16,18,19,21,23,24,27,31,32,38,41,54,57,63,65,66,67,69,70,71,72,73,74],project_cam_coords_with_object_transform:[11,13],project_flow_to_epipolar_lin:[11,13],projection_matrix_invers:[11,22],projection_matrix_pseudo_invers:[11,22],projective_geometri:[22,23,24,25,26],properti:[0,1,2,3,4],provid:11,pseudo:[22,24,65,69],pull:11,pytorch:11,quantiz:[11,27,31],quantize_pixel_coord:[11,27],queri:[0,4,35,36,37],query_posit:[0,4,35,36,37],quick:11,quickli:11,radii:[0,4,35,37],rai:[38,54,65,68],random:11,rang:[11,13,17,38,45],raster:[11,27,32],rasterize_triangl:[11,27],rather:11,read:11,real:11,redund:[73,74],refer:[13,17,19,22,23,24,25,26,35,36,37,38,39,40,42,43,44,45,47,49,51,53,55,56,57,58,59,60,61,62,63,65,66,67,68,69,70,71,73,74],rel:[11,13,15,18,20,21],remain:11,render:[11,28,29,30,31,32,33,34],render_imag:11,render_pixel_coord:11,repres:[11,22,25,38,45,54],represent:[11,38,45],reproject:[27,31],request:11,requir:[11,65,72],reshap:11,resolut:[73,74],respect:11,result:11,rgb1:11,rgb2:11,rgb:[11,27,31,73,74],right:11,rightward:[38,45],robot:11,ronald:11,rot_mat_and_cam_center_to_ext_mat:[11,38],rotat:[0,2,38,58],rotation_mat:[38,58],run_through:11,same:[13,14,19,20,21,27,28,31,32,33,34,38,44,45,46,47,49,50,53,55,57,60,62,65,67,68,69,70,73,74],sampl:[11,38,40],sampling_pixel_coord:[38,40],scalar:[38,54],scale:[11,13,16,27,33,38,42,45,55,56,57,61,63,65,67,70,72],scatter:[11,27,31],scene:[0,4,11],scratchapixel:[27,32],script:11,sdf:[0,4,11,36,37],search:[13,17],search_rang:[13,17],second:[11,13,17,65,68,70],section:[11,22,23,24,25,38,45,47,49,53,58,65,69],see:11,select:11,separ:[73,74],sequenc:[0,1,2,3,4,13,14,15,16,17,18,19,20,21,22,24,26,27,28,29,30,31,32,35,36,38,40,42,43,44,45,46,47,48,49,50,52,53,54,55,56,57,58,60,61,62,63,65,66,67,68,69,70,71,72,73,74],set:[0,1,2,3,4,11,35,36,37],set_slic:[0,1,2,3,4],shape:[0,1,2,3,4,11,13,14,15,16,17,18,19,20,21,22,24,26,27,28,29,31,32,35,36,38,40,42,43,44,45,46,47,48,50,52,54,55,56,57,58,60,61,62,63,65,66,67,68,69,70,71,72,73,74],share:11,show:11,shown:11,sign:[0,4,11,35,36,37],sim:[38,51,54,58,65,68],simpl:11,simpler:11,simpli:[38,45],simplifi:11,simultan:11,sing:35,singl:[11,65,68,73,74],single_view_geometri:[38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],size:[27,33,34],slice:[0,1,2,3,4],slice_obj:[0,1,2,3,4],smooth:[27,33,34],smooth_image_fom_var_imag:[11,27],solut:[22,25],solv:[22,25],solve_homogeneous_dlt:[11,22],some:[11,73,74],some_other_stuff:[27,29],sourc:[0,1,2,3,4,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,65,66,67,68,69,70,71,72,73,74],space:[27,32,73,74],spatial:[27,33],specif:[73,74],sphere:[0,4,35,37,38,39,43,56,59,60,61,65,66,71],sphere_coord:[38,59,60,61],sphere_coords1:[65,71],sphere_posit:[0,4,35,37],sphere_radii:[0,4,35,37],sphere_signed_dist:[11,35],sphere_to_angular_pixel_coord:[11,38],sphere_to_cam_coord:[11,38],sphere_to_pixel_coord:[11,38],sphere_to_sphere_coord:[11,65],spheric:[27,31],stage:[27,32],start:11,step:11,stephen:11,store:[38,45],str:[0,1,2,3,4,13,14,19,20,21,27,28,29,31,32,33,38,44,45,46,47,49,50,53,55,57,60,62,65,67,68,69,70,72,73,74],string:[0,1,2,3,4],subsequ:[38,45],subset:[73,74],suggest:11,support:[0,1,2,3,4,11,14,15,16,17,18,19,20,21,23,24,25,26,28,29,30,31,32,33,34,36,37,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,66,67,68,69,70,71,72,74],surfac:[35,36,37],system:[22,25],take:11,target:11,templat:11,tensorflow:[0,1,2,3,4,11],tensorspec:[0,1,2,3,4],than:11,therefor:[38,45],thi:[0,4,11,13,15,18,20,38,45,73,74],threshold:[27,31],time:[11,13,15,18,20,21],timestep:[13,20,21],titl:11,tobyt:11,todo:[0,4],togeth:[65,68],top:[11,38,45],torch:11,tran:[22,26],transform:[11,13,15,18,20,22,65,67,70],treat:11,triangl:[27,28,29,32],triangul:[11,13,14,65,72],triangulate_depth:[11,65],triangulation_method:[13,14],trimesh:[27,28],two:[11,38,45,68,69],two_view_geometri:[65,66,67,68,69,70,71,72],u_pix_coord:11,unbatch:[73,74],uniform:[13,14,19,21,27,31],uniform_pixel_coord:[13,14,19,21,27,31],unit:[38,54],unknown:[22,25],upon:11,use:[11,27,31,38,45],used:[11,13,17],useful:11,uses:[11,73,74],using:[13,14,16,22,25,27,33,34,38,45],v_max:[73,74],valid:[11,27,28,31],validity_mask:[27,28],valu:[0,4,11,27,28,31,33,34,38,45,73,74],var_threshold:[27,31],varianc:[27,31,33,34],vector:[38,45,54,65,68],veloc:[13,15,18,20,21],velocity_from_cam_coords_id_image_and_object_tran:[11,13],velocity_from_flow_cam_coords_and_cam_mat:[11,13],veri:11,vertic:[27,28],via:11,view:11,vision:11,visual:11,volum:[13,17],voxel:[11,74],voxel_grid:[73,74],voxel_grid_lower_corn:[73,74],voxel_shape_spec:[73,74],warp:11,weight:[27,34],weighted_image_smooth:[11,27],what:11,when:11,where:[11,27,28,38,54],wherebi:11,whether:[27,31,38,45],which:[0,4,11,13,14,19,20,21,27,28,29,31,32,33,35,36,37,38,44,45,46,47,49,50,53,55,57,60,62,65,67,68,69,70,73,74],who:[38,54],wide:11,width:[22,26,38,45,48,52],with_db:[11,27,31],within:11,without:11,work:11,world:[11,38,44,54,57,62,63,65,68],world_ray_vector:[65,68],world_to_cam_coord:[11,38],world_to_pixel_coord:[11,38],wrap:[27,30],written:11,www:[27,32],x_max:[73,74],year:11,you:11,your:11,z_max:[73,74],zero:[0,1,2,3,4],zeros_lik:11},titles:["Containers","CameraGeometry","Extrinsics","Intrinsics","PrimitiveScene","Ivy","Ivy Gym","Ivy Mech","Ivy Memory","Ivy Robot","Ivy Vision","Contents","&lt;no title&gt;","Optical flow","depth_from_flow_and_cam_mats","flow_from_cam_coords_id_image_and_object_trans","flow_from_depth_and_cam_mats","pixel_cost_volume","project_cam_coords_with_object_transformations","project_flow_to_epipolar_line","velocity_from_cam_coords_id_image_and_object_trans","velocity_from_flow_cam_coords_and_cam_mats","Projective geometry","projection_matrix_inverse","projection_matrix_pseudo_inverse","solve_homogeneous_dlt","transform","Rendering","coord_image_to_trimesh","create_trimesh_indices_for_image","pad_omni_image","quantize_pixel_coords","rasterize_triangles","smooth_image_fom_var_image","weighted_image_smooth","Sdf","cuboid_signed_distances","sphere_signed_distances","Single view geometry","angular_pixel_to_sphere_coords","bilinearly_interpolate_image","calib_and_ext_to_full_mat","cam_to_pixel_coords","cam_to_sphere_coords","cam_to_world_coords","create_uniform_pixel_coords_image","ext_mat_and_intrinsics_to_cam_geometry_object","focal_lengths_and_pp_offsets_to_calib_mat","focal_lengths_and_pp_offsets_to_intrinsics_object","focal_lengths_to_persp_angles","inv_ext_mat_and_intrinsics_to_cam_geometry_object","inv_ext_mat_to_camera_center","persp_angles_and_pp_offsets_to_intrinsics_object","persp_angles_to_focal_lengths","pixel_coords_to_world_ray_vectors","pixel_to_cam_coords","pixel_to_sphere_coords","pixel_to_world_coords","rot_mat_and_cam_center_to_ext_mat","sphere_to_angular_pixel_coords","sphere_to_cam_coords","sphere_to_pixel_coords","world_to_cam_coords","world_to_pixel_coords","&lt;no title&gt;","Two view geometry","angular_pixel_to_angular_pixel_coords","cam_to_cam_coords","closest_mutual_points_along_two_skew_rays","get_fundamental_matrix","pixel_to_pixel_coords","sphere_to_sphere_coords","triangulate_depth","Voxel grids","coords_to_voxel_grid","Warping"],titleterms:{angular_pixel_to_angular_pixel_coord:66,angular_pixel_to_sphere_coord:39,bilinearly_interpolate_imag:40,calib_and_ext_to_full_mat:41,cam_to_cam_coord:67,cam_to_pixel_coord:42,cam_to_sphere_coord:43,cam_to_world_coord:44,camerageometri:1,citat:11,closest_mutual_points_along_two_skew_rai:68,contain:0,content:11,coord_image_to_trimesh:28,coords_to_voxel_grid:74,create_trimesh_indices_for_imag:29,create_uniform_pixel_coords_imag:45,cuboid_signed_dist:36,demo:11,depth_from_flow_and_cam_mat:14,document:11,ext_mat_and_intrinsics_to_cam_geometry_object:46,extrins:2,flow:13,flow_from_cam_coords_id_image_and_object_tran:15,flow_from_depth_and_cam_mat:16,focal_lengths_and_pp_offsets_to_calib_mat:47,focal_lengths_and_pp_offsets_to_intrinsics_object:48,focal_lengths_to_persp_angl:49,geometri:[22,38,65],get:11,get_fundamental_matrix:69,grid:73,gym:6,interact:11,intrins:3,inv_ext_mat_and_intrinsics_to_cam_geometry_object:50,inv_ext_mat_to_camera_cent:51,invol:11,ivi:[5,6,7,8,9,10],mech:7,memori:8,optic:13,overview:11,pad_omni_imag:30,persp_angles_and_pp_offsets_to_intrinsics_object:52,persp_angles_to_focal_length:53,pixel_coords_to_world_ray_vector:54,pixel_cost_volum:17,pixel_to_cam_coord:55,pixel_to_pixel_coord:70,pixel_to_sphere_coord:56,pixel_to_world_coord:57,primitivescen:4,project:22,project_cam_coords_with_object_transform:18,project_flow_to_epipolar_lin:19,projection_matrix_invers:23,projection_matrix_pseudo_invers:24,quantize_pixel_coord:31,rasterize_triangl:32,render:27,robot:9,rot_mat_and_cam_center_to_ext_mat:58,run:11,sdf:35,singl:38,smooth_image_fom_var_imag:33,solve_homogeneous_dlt:25,sphere_signed_dist:37,sphere_to_angular_pixel_coord:59,sphere_to_cam_coord:60,sphere_to_pixel_coord:61,sphere_to_sphere_coord:71,through:11,transform:26,tree:11,triangulate_depth:72,two:65,velocity_from_cam_coords_id_image_and_object_tran:20,velocity_from_flow_cam_coords_and_cam_mat:21,view:[38,65],vision:10,voxel:73,warp:75,weighted_image_smooth:34,world_to_cam_coord:62,world_to_pixel_coord:63}})