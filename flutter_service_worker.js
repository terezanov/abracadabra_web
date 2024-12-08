'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "58673716daa9688a28da6709574f567d",
"assets/AssetManifest.bin.json": "a04cf9cda660f84fa4ab944aafb2d9c5",
"assets/AssetManifest.json": "24cc33b6839cf1a30c54b35944621e61",
"assets/assets/icons/back.png": "7ac33d1b9cc64cb340a6a37f6d55e78e",
"assets/assets/icons/broom.png": "492bf02db1c847dd923c33489a5acabb",
"assets/assets/icons/camera.png": "fcbc3a4743955e093644f719468bd0b9",
"assets/assets/icons/chain.png": "3dd9018c1c3ac56f78efdba705bb5ac1",
"assets/assets/icons/check.png": "1d444964b3c5e5ce798c047874775991",
"assets/assets/icons/close.png": "2a84d9f131691f45d057e23791261151",
"assets/assets/icons/delete.png": "82f1ed755d0daa54c56590c576ed4799",
"assets/assets/icons/diskette.png": "0c58d8a83c5f2b4f9de4281242cce666",
"assets/assets/icons/gallery.png": "14af20415207250d5a1d94c9304dcf99",
"assets/assets/icons/gear.png": "a1d2b9c855a661511ae122c83f5b73fe",
"assets/assets/icons/home.png": "0d5591b3699112df3879dacf0c334237",
"assets/assets/icons/image.png": "998ea9ff13dbeaff72707c1a406197be",
"assets/assets/icons/info.png": "efd81e47e4a7c922e000ba916181d3c9",
"assets/assets/icons/loupe.png": "750d863fb2b0cd88554177dd3e72fea8",
"assets/assets/icons/love.png": "166674fa4dc4ec53afe822d6b36a8632",
"assets/assets/icons/pencil.png": "5ccf0fd94489c6fac51151b7efb3ab41",
"assets/assets/icons/plus.png": "9f9f9e91f69566ee4e8a16c7eaf981d9",
"assets/assets/icons/refresh.png": "4e9d9c27c6cc1ff382b2af549537bfe9",
"assets/assets/icons/resizing.png": "dc9dd93409c0aa0ebd46cbb6218d6688",
"assets/assets/icons/trash.png": "9d7d1b59d6da087d33417dfa7b7ceeaa",
"assets/assets/icons/zoom.png": "794ebacbdf25668bc184abca5bf91e7e",
"assets/assets/images/actions.png": "781cc96850ae738acdde5f47372a38b9",
"assets/assets/images/actions_brushteeth.png": "764dc5d1d9787d729fccf771976076bc",
"assets/assets/images/actions_doexercises.png": "fac13c075ba9da4dc55cee694dad579b",
"assets/assets/images/actions_dress.png": "80b1cba221461b85c88d41aa920be731",
"assets/assets/images/actions_drink.png": "50402347756fac939ba00f60ad541db2",
"assets/assets/images/actions_eat.png": "f91c7bde7079cd49a0db3d069545fd4d",
"assets/assets/images/actions_gototoilet.png": "c997183aacb6f3c85c6fe2460f86fbeb",
"assets/assets/images/actions_makebed.png": "4b8aef9ade4ad4269b4e5c834a3f8dac",
"assets/assets/images/actions_play.png": "ec1d2d828c33b85e42a234199b7b5f8f",
"assets/assets/images/actions_sleep.png": "4694e281e9be9cc5d94757e8252fdec3",
"assets/assets/images/actions_study.png": "140f75bc959bb809e5722f76f1b62b6e",
"assets/assets/images/actions_wash.png": "c3c985da10c98154f9ee96a8d58928be",
"assets/assets/images/actions_washhands.png": "11eaa9de57b8158274a6f949acca0bc9",
"assets/assets/images/anatomy.png": "0149c8a18f5dbad9bb6f960fbc9ca7f1",
"assets/assets/images/anatomy_arm.png": "9b9ba91b2ec878ad523b9e1f5e7ecf7e",
"assets/assets/images/anatomy_belly.png": "82249ade9060a8e8df784b633e168be8",
"assets/assets/images/anatomy_ear.png": "b05f756056ad9fdc9b8690a25ea2989d",
"assets/assets/images/anatomy_eyes.png": "1e86d031cff6b7e2b39674367a549b7a",
"assets/assets/images/anatomy_head.png": "78e9b51a55cc9000638f3d88dcbf464c",
"assets/assets/images/anatomy_leg.png": "3b0f80304133d75bb09341e0bb9952ca",
"assets/assets/images/anatomy_mouth.png": "362c0bf50a356afc9ca3b513fe024834",
"assets/assets/images/anatomy_nose.png": "074061bc9732682be61a4c0f4067d93b",
"assets/assets/images/appliances.png": "bcf1fe20956c27d4b54015bfcf5598ab",
"assets/assets/images/appliances_cleaner.png": "4ab211606f027944ca188feb794e4608",
"assets/assets/images/appliances_fridge.png": "2f65123110517fd2143bf4d009ecf2f1",
"assets/assets/images/appliances_iron.png": "f80a20ec844cf8282c2faccaefb6fc92",
"assets/assets/images/appliances_microwave.png": "09ac36425d6bf01cc3096f9f3221a542",
"assets/assets/images/appliances_stove.png": "a380fac42f2f931cedbf46ac41153cd6",
"assets/assets/images/appliances_teapot.png": "adc367834f41a52a4d12a3f18a6501cf",
"assets/assets/images/appliances_tv.png": "d273c27fd88e6908d6046a4feaf8e26b",
"assets/assets/images/appliances_washingmachine.png": "16196316494f8e78ed7e4b1d5540b8b7",
"assets/assets/images/clothes.png": "cf6aa01e479724c54c90632cec9ffe63",
"assets/assets/images/clothes_blouse.png": "39724ceeda04c4af0497ebb345e4f576",
"assets/assets/images/clothes_boots.png": "1d3030a92c982e437fce1fd0b6c5f8c3",
"assets/assets/images/clothes_cap.png": "fdcfca6f6b74af86dad9f5f00aa364db",
"assets/assets/images/clothes_dress.png": "baabba7e18b52221545398b510b327f5",
"assets/assets/images/clothes_jacket.png": "39593d656f90ea7b593b6693db7abb08",
"assets/assets/images/clothes_mittens.png": "0e4e1b029a9b48a5e867eace21534959",
"assets/assets/images/clothes_pants.png": "e1f078d509692c75c970c0311cd8529e",
"assets/assets/images/clothes_sandals.png": "bc0adffd6fc136170e53306e0c4e21a0",
"assets/assets/images/clothes_scarf.png": "d14bf3d0f8a8b682b5a41069ffdc4cce",
"assets/assets/images/clothes_shirt.png": "50a9ff327fef8219d7bd95ac86709cfc",
"assets/assets/images/clothes_shoe.png": "a763222f2af2f3ea8b8b9f759bbe64a1",
"assets/assets/images/clothes_shoes.png": "53cefba6bc6fa8daba437f0bcb87dbfc",
"assets/assets/images/clothes_shorts.png": "9e1288ccb6df8ada323c95b902f0530c",
"assets/assets/images/clothes_skirt.png": "c8d655ce743195b257416e4c9cbe9d10",
"assets/assets/images/clothes_slippers.png": "b372e84837c3599f6ec941c16ff25a4b",
"assets/assets/images/clothes_sneakers.png": "a109a0b688dc11a7807c9d6d2c74ccf8",
"assets/assets/images/clothes_socks.png": "4236e22fded72368c3e408c9983d91db",
"assets/assets/images/clothes_trousers.png": "50ca2da837cf349282f56a840ade7b8e",
"assets/assets/images/creativity.png": "16230513bf1034793be25247badcc37d",
"assets/assets/images/creativity_cut.png": "653efa8368ecadd0388081c5b343cdb1",
"assets/assets/images/creativity_drawfelttippens.png": "09c73b6e32133fe5a03509e0887887af",
"assets/assets/images/creativity_drawpaints.png": "fcdab973d771ce911ce26e5376c0113c",
"assets/assets/images/creativity_drawpencil.png": "2ed25d0a9ae4f8f2015bf51af9b9bb99",
"assets/assets/images/creativity_makeapplication.png": "9db3d243a2cb0b08cd1494f52fb4347f",
"assets/assets/images/creativity_puttingmosaic.png": "823b8bceafce311eaeb7dcf5fb80d694",
"assets/assets/images/creativity_readbook.png": "e55bbd120a5708c5d6a22365f52efeb1",
"assets/assets/images/creativity_sculptplasticine.png": "79d2fe36758f26079b74d045fa0df4cf",
"assets/assets/images/drinks.png": "de4ff1893894ab9aa0be6fd75adf3015",
"assets/assets/images/drinks_cocoa.png": "1831e4879df03c49ea9051d285d160f0",
"assets/assets/images/drinks_compote.png": "58f46abd590d1f37e665b3c318f872f0",
"assets/assets/images/drinks_juice.png": "7e04c04a8f38aa5d5a38135ba8bfa6e5",
"assets/assets/images/drinks_milk.png": "5a2d1a6309f1fc53630caaaaa9d37454",
"assets/assets/images/drinks_tea.png": "f92d37ce6ca8ea941ff4306afd497710",
"assets/assets/images/drinks_water.png": "b32a550141f6f6ef9d55edb9fd1883d9",
"assets/assets/images/food.png": "5ad5492781a3da1bf026897fac6b34d4",
"assets/assets/images/food_bigcake.png": "a410232a10252be97187ca3b5bd10286",
"assets/assets/images/food_bread.png": "0c77a5cab7a228feb659a7abcf699475",
"assets/assets/images/food_bun.png": "7505c183b8b2b5e07176285966109104",
"assets/assets/images/food_butter.png": "a898ad0dbd1e60e1f16402e79251b638",
"assets/assets/images/food_cake.png": "4211dc47803a42c945b34fead479eb35",
"assets/assets/images/food_candy.png": "88b41cf3dae9d830235a883a66b8b5d0",
"assets/assets/images/food_casserole.png": "23c9350a389f7c6e8865c267948fca6b",
"assets/assets/images/food_cheese.png": "68dcaf231878102d8fb9c810a466242f",
"assets/assets/images/food_chocolate.png": "e6e61398c29c1a87c2e4aa4352e46d96",
"assets/assets/images/food_cookies.png": "3c514dbab74f72e4380939e00a04198e",
"assets/assets/images/food_cutlets.png": "94672e0542592c13b9483fe3cca87c82",
"assets/assets/images/food_dumplings.png": "da11d3d62ca87c908bd27ae1fb0288cb",
"assets/assets/images/food_eggs.png": "388111c178d9f55683bcf2ff267d14c1",
"assets/assets/images/food_friedchicken.png": "91981e08669269b6bb340b633110dd8c",
"assets/assets/images/food_friedegg.png": "e636be896ab2f24bb659bdf96a2bb183",
"assets/assets/images/food_icecream.png": "9255d1810544427a9b89e7cf4e42e294",
"assets/assets/images/food_meat.png": "30cf9e48a44786a99adae380aca832be",
"assets/assets/images/food_pasta.png": "0ecfafbb24fc4ff02fe5d4ab5ee24896",
"assets/assets/images/food_porridge.png": "671501614f622675e24c819f9e99278a",
"assets/assets/images/food_salad.png": "825f210221e5a59ed9e1990d94f66db6",
"assets/assets/images/food_sausages.png": "56431c64fec6d94a133e6f88ed9efe11",
"assets/assets/images/food_soup.png": "ce52404718145681d0b0c34cdde70d13",
"assets/assets/images/food_waffles.png": "7eef6be95db9f343599ffaa52c8758e5",
"assets/assets/images/food_yogurt.png": "21a81931bbe4cac370dd00ac1e5cf75a",
"assets/assets/images/fruitsveggies.png": "6ee63c0086ff4238ab885448620403f1",
"assets/assets/images/fruitsveggies_apple.png": "c205ba334933acb28a970801f51caacb",
"assets/assets/images/fruitsveggies_apricot.png": "c4ca49f09a7b2b598d87d47aafd82cdc",
"assets/assets/images/fruitsveggies_banana.png": "3fe81f28dcced8fe375de8149d7eeda2",
"assets/assets/images/fruitsveggies_bellpeppers.png": "f595c632b67bda74a27c53e850189321",
"assets/assets/images/fruitsveggies_broccoli.png": "e22f41c5cc602c52ea2acb054c8757f2",
"assets/assets/images/fruitsveggies_cabbage.png": "05b0ae8f953c3f40f3daed20b4fc0f9f",
"assets/assets/images/fruitsveggies_carrot.png": "62d9000e352b4b3ed808882af8260fe1",
"assets/assets/images/fruitsveggies_cucumber.png": "b804ca7db38098ca28222dfda71e329a",
"assets/assets/images/fruitsveggies_eggplant.png": "e97a53e05c11502942711f4d3bbb53a1",
"assets/assets/images/fruitsveggies_garlic.png": "22adf17afc5b19674e0df963d8e249bf",
"assets/assets/images/fruitsveggies_garnet.png": "1dc48bf19d32f0409541d80f268a7243",
"assets/assets/images/fruitsveggies_lemon.png": "459b803fc1fab4c6f5ba4eda9f26ad78",
"assets/assets/images/fruitsveggies_melon.png": "febe7f5c833128a4dfee2dabf4306a3a",
"assets/assets/images/fruitsveggies_onion.png": "65367cf06ec16dfbfbd2bd91d30d178d",
"assets/assets/images/fruitsveggies_orange.png": "4f1b808d60a83cc5b0f6f2a2a1c31f41",
"assets/assets/images/fruitsveggies_peach.png": "11b327331096ed5a5dbfa87de8e21cf4",
"assets/assets/images/fruitsveggies_pear.png": "4570efa77f5d4ac3099e9b408327f322",
"assets/assets/images/fruitsveggies_plum.png": "1f1c6267cfbc7d1ac9c976995d9b6d57",
"assets/assets/images/fruitsveggies_potato.png": "0c9a6a753ebbab9b4c5ec88b10cd2ee8",
"assets/assets/images/fruitsveggies_pumpkin.png": "39a05b55b58a36ca21b0975cf7bd6f4e",
"assets/assets/images/fruitsveggies_tangerine.png": "d86ed368e5bcfbce3327c25d4c02d4f6",
"assets/assets/images/fruitsveggies_tomato.png": "876ff0dc6716a5a04f54a79475cd8195",
"assets/assets/images/fruitsveggies_watermelon.png": "fecd43723e3b0624351d713b05ed7bff",
"assets/assets/images/fruitsveggies_zucchini.png": "f3bf483230ca6b52a4e6362a8dfe0014",
"assets/assets/images/furniture.png": "1dc0d1a153e8aeef31ca04c0a0ad782b",
"assets/assets/images/furniture_armchair.png": "2c607f477beb42f387afade786557117",
"assets/assets/images/furniture_bed.png": "12ab279085ca1d2002eb64fd5d2f7562",
"assets/assets/images/furniture_chair.png": "cdebabc4cedfd9d6c93a123a4264b2e6",
"assets/assets/images/furniture_chest.png": "54fb520a9383751138df9fa3d0a730b3",
"assets/assets/images/furniture_pedestal.png": "37fc915ec15adfdb5dbf01a1ec659215",
"assets/assets/images/furniture_sofa.png": "843a75d3a1ddc950b498388b2649e62c",
"assets/assets/images/furniture_table.png": "878cda4f394cf8ec5bb09abba5c5425e",
"assets/assets/images/furniture_wardrobe.png": "2deabdb26ec67923e069819191b63804",
"assets/assets/images/hygiene.png": "6fe26eda9f4673d7325dc7a019fe57ce",
"assets/assets/images/hygiene_hairbrush.png": "cd212a695cd96ddefeadb20dd8c63ee1",
"assets/assets/images/hygiene_loofah.png": "934239361cf5ba65fcf1583564151f12",
"assets/assets/images/hygiene_pot.png": "65541d9f5aafe2be23a0a284a01958a2",
"assets/assets/images/hygiene_shampoo.png": "3cdbb3d548f7090d7116832dd0d9f603",
"assets/assets/images/hygiene_soap.png": "76c06a75316447adefb1ef837552069d",
"assets/assets/images/hygiene_toiletpaper.png": "ec8e2103af1abe781265fc2cc5291e90",
"assets/assets/images/hygiene_toothbrush.png": "f79a8f7a94dfc7a75fdcb69733ad576c",
"assets/assets/images/hygiene_toothpaste.png": "9cf018738f7cba497eb565da996722af",
"assets/assets/images/hygiene_towel.png": "0fdfcd86ecb15671cfa7794f420159ea",
"assets/assets/images/hygiene_wetwipes.png": "2a096d80b863388fb3b81463baddd15e",
"assets/assets/images/intentions.png": "ecc6bee30e06cf9b1fbea193da080de2",
"assets/assets/images/intentions_help.png": "fecb5dbe668a7b8ef90e7d4d05130290",
"assets/assets/images/intentions_idontwant.png": "fe4d2d59ac9c62609afc9d77aa623390",
"assets/assets/images/intentions_iwant.png": "cb8c738bfcd6179f0615cc62642cf6b2",
"assets/assets/images/intentions_listen.png": "ad4cedb1a9a2a862f98c972f30ec79de",
"assets/assets/images/intentions_look.png": "35301752687d73ce5476193c1c8e989e",
"assets/assets/images/intentions_no.png": "584f238014e696d1c135fae1018b866d",
"assets/assets/images/intentions_stop.png": "5a7ecc8fbeb8878a1c9a06fc9fc14563",
"assets/assets/images/intentions_yes.png": "6990573bb2c2a893ad53994a9f5c6a6c",
"assets/assets/images/kitchen.png": "544291e12c63699b162fda0b289197cd",
"assets/assets/images/kitchen_cap.png": "8f379bbf15faabbe722a44906271b7c0",
"assets/assets/images/kitchen_cup.png": "c0c1821f20cbd15a29e91c138a40ba56",
"assets/assets/images/kitchen_fork.png": "5fb8f15b2ae63bab7984c2c6560de33f",
"assets/assets/images/kitchen_fryingpan.png": "39e0a85c9dacddea294dae88562e47c3",
"assets/assets/images/kitchen_knife.png": "19b8db0d3f4feae3aa3b7b11860ac3fd",
"assets/assets/images/kitchen_plate.png": "e8d104f09f0c64d79874f56732957c90",
"assets/assets/images/kitchen_pot.png": "0d95cbbf890ef7928ad62a866051f43e",
"assets/assets/images/kitchen_spoon.png": "385512560d110aae7c57e5bb43ac5fd8",
"assets/assets/images/nature.png": "25ec76e27b5e6e6243674bfc067997dd",
"assets/assets/images/nature_branch.png": "eb107da7f18d737dc9416ebe9fcfb422",
"assets/assets/images/nature_cone.png": "6605b2d8ded97d984d2b9a54f8559591",
"assets/assets/images/nature_flower.png": "2feea4897cd62394836f1c66a4af5410",
"assets/assets/images/nature_grass.png": "5c69c8365dc2c15c7a70f28be09e3978",
"assets/assets/images/nature_hollow.png": "44e50fc9c9c03327cb42df2b5bcb252e",
"assets/assets/images/nature_sheet.png": "6a48579fbe073547c26898a85a037f87",
"assets/assets/images/nature_stump.png": "dd3c3fadbc0c403e38602d9d49c486c3",
"assets/assets/images/nature_tree.png": "786d558d83beaae893f69a2be6eeec46",
"assets/assets/images/sleep.png": "b491811e1c1fc4928adfa20476814390",
"assets/assets/images/sleep_blanket.png": "1c0ecfe0a650b0de2184aa0361f393f4",
"assets/assets/images/sleep_pillow.png": "5ca2f971b522f5d2fce00e3e562617d0",
"assets/assets/images/toys.png": "deaae2bf8ae9d0506694b193cb80ba1e",
"assets/assets/images/toys_cubes.png": "5a9ddef69846983aea5e863c3cb4d41c",
"assets/assets/images/toys_designer.png": "eeb7acecb5f8eff64e035bdfd1bf335d",
"assets/assets/images/toys_doll.png": "1acc92325d6c3537e56b5b1a99e4ab75",
"assets/assets/images/toys_pyramid.png": "87ffc44fe1aef80f9e16d8540e3bfab9",
"assets/assets/images/toys_railway.png": "7edee027d9bf86e5e7349f1117ce3b00",
"assets/assets/images/toys_soapbubbles.png": "2bfc8c9accd9190bbcb60f3b5c35c7be",
"assets/assets/images/toys_teddybear.png": "2d9d0f0e9e88173af3118b214b32dcc5",
"assets/assets/images/toys_whirligig.png": "9cbc594f8fe1e181f20c9aba6e58f561",
"assets/assets/images/walk.png": "2e388e4043f6905c8945077df7702b48",
"assets/assets/images/walk_playinsandbox.png": "0f69affd7ed0e3535cda2c1d17ac2e6c",
"assets/assets/images/walk_ridebike.png": "75b9b65c6dea0c6262c74c50556b10db",
"assets/assets/images/walk_ridedownhill.png": "160e4bcec0c23023d4360ae178cabaa2",
"assets/assets/images/walk_ridescooter.png": "c47ccc0e0893d91ab16602251b510a19",
"assets/assets/images/walk_ski.png": "86460012a2fa1e0bcc1020de15cf7989",
"assets/assets/images/walk_sledding.png": "4b06439ff4597135c4c65a32847e8c00",
"assets/assets/images/walk_swingonswing.png": "c80a53ad221aabaea4d35f295f1dd9a8",
"assets/assets/images/walk_walkonplayground.png": "64d841cf9693ff631b45f8e85a0b6840",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "7d0def3ed18172ccb9f41b301ec565c7",
"assets/NOTICES": "adf232cf4d8e67e3ade143754efb43fa",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "e92c8848150340ae41ce740a738d39d7",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d2eb3a4eb99211492d0d71362d611d7e",
"icons/Icon-192.png": "5cc83ac18844df07dde3fc3aab426c3c",
"icons/Icon-512.png": "34e33963a4c06faa113e5262af587d7c",
"icons/Icon-maskable-192.png": "5cc83ac18844df07dde3fc3aab426c3c",
"icons/Icon-maskable-512.png": "34e33963a4c06faa113e5262af587d7c",
"index.html": "d43819db60bfac3f94addada0f2ea6af",
"/": "d43819db60bfac3f94addada0f2ea6af",
"main.dart.js": "2d2cdff5dbc3d08ce3708fb5a36d3a49",
"manifest.json": "e84d9cc4bd759c43c8c1276118f6c2ff",
"sqflite_sw.js": "4e90ada89670da328d6c72679eb3f9a7",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"version.json": "5d58abc468c8df1e5c62cb06fa82f7b8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
