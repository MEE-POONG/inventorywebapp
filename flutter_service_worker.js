'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fd96892fe8eaefa5966425e5cab05910",
"favicon.ico": "d0071f97718ede1c2defd324be726341",
"index.html": "d60bfb971c79b58f0306fe0f718937ae",
"/": "d60bfb971c79b58f0306fe0f718937ae",
"LICENSE": "b9dbfc5a18579a1a04e90641f8429831",
"main.dart.js": "b8154e6417a6430bae0323939091a348",
"README.md": "b2125186e6efb5e7c0ce18d002668223",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "04108dfb2c872df22c72e7cfb58bef9b",
"icons/android-chrome-192x192.png": "3b1328a6c918c329860e2e0699dcd8cc",
"icons/apple-touch-icon.png": "0c13e22b0b0c7b6ddc5ce381b3b67a87",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/android-chrome-512x512.png": "b38a8ebeb2aecb575315474599f9f603",
"icons/logo.jpg": "6e5ed1691b430892f40968ad3a5af566",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "448c3cbbddfc553b79225855a1b2d2ed",
"manifest.json": "9114a28df0d33de7ea683d5bf2213e5e",
".git/ORIG_HEAD": "b9b1f64c560446668420a18e28f094a7",
".git/config": "ca00d164caf4185214b0cf5956b3ce80",
".git/objects/61/368469cf5e3b3f356367abc795f5071ccd9f53": "3770f1061f5f4508c70db57e2a741065",
".git/objects/92/179a806b5c0424ef4f3bd92b390c43d2f32043": "0609c2f9723a34d6617f99473ea8bdaf",
".git/objects/92/fd65fe0b6f27f43f362d4588380e3b8fe033ae": "53fa0ba9f053d17d0be4c3ce44614e15",
".git/objects/66/d88991d1b301b48b44438cfb2eace24713e344": "8d6e170c11c71b550a80086613666c16",
".git/objects/68/e3f0e9dee783634d554f8a28b6f4237dc00791": "e1f81ed89703a46807d043091a9b4b58",
".git/objects/57/e9080f494e8ca8be5b4b6d69a917cdacc5c484": "a2e0132ec00b1bb476ca37d72936d5fa",
".git/objects/3c/114f99111b3645600ed1f6d3a7709776da7599": "39429940ea511bb174f7333016bac073",
".git/objects/51/fa0257125e13ef1694a3fce4604ccce207b5e6": "c2ccca4bda6427242cf4f55f5de00eff",
".git/objects/51/1717efb197ae77946ad6e7dd9f123b51ddcb69": "9bdf3bd979553bd748e4750ca94f3e1c",
".git/objects/3d/376cfee38cd3ef8ad5fbe1769c6c3bac796bcd": "81d3ad5793ce1f92722509df95ffd25a",
".git/objects/67/3321540cfca963163a7cb3f7e867dd0809a1e8": "9cfe1fed68c66cd388528e43996773ba",
".git/objects/67/1851b94f3b25b7d05a567641cf666d6566e4d8": "5b7c1b23a23c67788be24bdee5ec7fb5",
".git/objects/94/c3dd5ef1a1d1ec1ac9ed5e94c3f99a8d75ea03": "5ba54d59c7e128b91644fc15fe334e67",
".git/objects/94/e42dff7429f535150c8a55a60b4d2a44162e8a": "29a96cf243208abaff83f22f02d766c3",
".git/objects/9d/1d097a6ef0a9cd5a5c9927f5a61030cc026fef": "7f7afdd4cd5b336e9672c773f1109957",
".git/objects/a4/46bbef60113b3de61900b3baceca0462861816": "5f79ea225296f4e03735f9a9140098d0",
".git/objects/b5/e917c283214ea648b6e4c349efdb7f54f72a9c": "5f995521773b587fc1cb81ba0469dd90",
".git/objects/d9/d25f3e1c8feb347eaff2725a96ce38c4e10ed8": "30dfe5f8c9421ca16248727656538e9d",
".git/objects/d9/8741beb8031e0c116afdd74ed64e1e85ac93d0": "5f5658ecaf507c6feeec24c3f12a5cea",
".git/objects/ac/5e57c35755c4d0f21bbf77dccffb213d8fc09b": "2f5b996fb2039114219bdba42e396f75",
".git/objects/bb/d36aba5b9dfe8bdb988ec24b1ffde8c6f99f46": "afaaa351d4c07954aa0dc0d59ccf73d7",
".git/objects/df/0b753d5dd7be1f72576f3e048e1767b17a8675": "2b55c1276c35d1a6d8c486e457fe6039",
".git/objects/d1/716e9afcdb333953e838f72883d6940d7b2624": "2d1c449725073fae25765abbb42de88a",
".git/objects/ae/cf7fa39ec6755cd1504e8c531d2cc1ddb06cb5": "363c76ab2ebe70b94a2654577a733f4f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fd/eb139a33548e4bf5f98dc4f19f16c674fcedf1": "bddbbc8a499e8faa306f15943a8d392d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fe/40751f6a1375ada8229cb091c8e85de2d85674": "33541900bbd1a96ad6edd4b9518c7a48",
".git/objects/ed/51d46ed40562450312d62820abe7c06cfbdfe8": "6dfaba5db81326b75b22d0bbfaa0ad2d",
".git/objects/ec/26868563a690fa416c918a57719e1e7efa2394": "965c7a19d085359c570998640eb809ff",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7c/ce14d2831d046c821b62695334b0f6dd54d41c": "a37ea89f467f8d285a8e34db6a64e342",
".git/objects/7c/e68f9e437bcb5a9c32fd9d4754f299ef29c12c": "45650d5e9ec4e151885b5048bc88ba34",
".git/objects/42/c6f6d63809dd13d48723f3bd7acabdaa70bb1d": "cc2fbffd28e172dd4138b76af6519403",
".git/objects/42/5b247174d166aa85d85da4267a4a687063bac9": "a97560421d9fc6dcc8de881298304978",
".git/objects/80/9abe022571b80751e6e6ad6c1c70f6b2d33751": "ecd700aa339976f823c43687d5028da2",
".git/objects/28/de270e98fff5a297d967982228499c7069aa90": "757fb9133dafbec02afdefcfe6c70897",
".git/objects/28/eda19078e6fd8421d77ada622356c1342677fd": "dafb0a559be81bd9e6ffa9936a8ff1f6",
".git/objects/8a/818a9a3163113598aea7bca4db0e7d21f6bd94": "026b14658cc46c4b357e940ae5f977b2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/95befd4db718d9146a819533ab79772921b2a4": "d00b1994221541451681934fa20cbf3e",
".git/objects/4d/05e721c3de1c91259d3a185b7f832b3adbfa50": "8399e4d2a6c7032c92c8c0b5189b7b0e",
".git/objects/81/e1f55538eb49e5e12d1b9997c8004798801560": "3dcac1e1137cf54fc711068511593d56",
".git/objects/88/13b84e349db5fcade7dc88ea66049770c199e8": "df3af47b0bb00dc62437c1e105a83718",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/15c2ce3008462528ce719f7fcd5f9d52e84796": "471a8ae88e31bc79af69f5ecf2dc9203",
".git/objects/00/0969241d502c459dc14596dfee2af83e8d0470": "a5878f863e91a1b47d6b307f6349d583",
".git/objects/36/ceaaf3cd0b299db90e106a38ea51599d19175f": "1b924c78cbd52fff4aeefabc95dd3463",
".git/objects/31/6abac380776bdf3406a823577ad8ab0a90c904": "852b88b28395e5249d4baea761d7b4e7",
".git/objects/3a/1cd4ad388a55835004ca992552ca23788d1293": "0de24459c2c0fea92e018d06832b23dc",
".git/objects/54/8553e8af7dfd6c7979593c7195fb9009bda5d0": "4d5b7bdbb9a66fdeb45a4e7a12fd21ea",
".git/objects/5e/25159099c13e1818eef0e920e074696b2cf746": "49f8abcdb188b4c50490d0cda1a0c9fb",
".git/objects/5e/24912727efc4de2ceda0db2766bb260e073411": "7e44a2737594676590c0657d1f978f01",
".git/objects/6d/3c87610e6ce281dffc3ef7afe02d1d1a3e4e89": "492c333dcfa77be4a5f2b33400fff6ae",
".git/objects/01/da5aea6f1e551eb279f21736359fb834d7daf4": "c26f8657001b14c6230cb72e847083a4",
".git/objects/6c/41f3e9b25662de8ba326051609e9615a515f98": "7079aebf1493f299224a09add539f173",
".git/objects/99/92da5b2146ec972e484a98ec6bfa71a3bb9992": "b2602c6661e38e7c707595de10ad2fca",
".git/objects/99/3cafbd48f684f2910bbd5df23b8e182f4d37c0": "5f272e503b3ad6df5f94355eb1dee555",
".git/objects/0a/26797c4a76b94f5a26919fb6931b098f590ff6": "007e9ed7edc17af561cd7976a7a1632b",
".git/objects/b8/3f583339a574661b1a4d546851b51db015f986": "c724d2924c82b8a278e4acdc2dec93ec",
".git/objects/dd/c406987d186ca8019bc9d4d68662025b0d443d": "0d777690c194842d3ff408fb86e85e9f",
".git/objects/dc/2d070cce0fc9e374136226ecf224bc8cf400eb": "333da3fe670c816b5f34270f7a6b22e6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/688a1800c38c850ea83786a1e904705afcbbd8": "0d11caf5722c8c28ddc0fc0afff1c964",
".git/objects/db/f12f21f43dd0b228db73585c8fa7b0fb78e45c": "73082ab32e4e02742bc999b33a019c57",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a6/6ce1d72ab5be53ef8391c6e3217f39bce8e0d2": "85ac325aabfc98961995fec354da59fa",
".git/objects/b9/e7e1fbe678ed8661c136529ea95488e97aac18": "68e1014a11f013f844df37b8f714f0cb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/4fc5760b6bfaebc18391e3b941e9f2fdc13d48": "2357b7973de91876d2dfe69af36855ea",
".git/objects/cd/2bb3035a1301c1d8d01f9af93e0585fa9a890b": "0b6958df4a360789a3a10718f6749981",
".git/objects/e6/f6cee73d3978c7d2506bc0ee1eaa8c0cd00ec1": "17f25269a862f5b1709ccea22eeab814",
".git/objects/f0/00d239e7f748cbb8ae07cdf617d26b76451b21": "3919e5020849ab683c4f0eb325a18535",
".git/objects/ff/05459cc3daee1185fcf4eb7b2fb5930419d546": "f88e8c3a2c377d4efa51b578ee8083d5",
".git/objects/f6/46b5dce81d7db7a2fc2a85c2bfce8b07a064b0": "8075c5f7d4aa012e382345232de241ea",
".git/objects/f1/2894fd5c9e7cb766949eeab538827d6fd2d83b": "61c92e12f7a9f82a472051f5d8d54dfa",
".git/objects/46/4a6df4b8a0b9863e9ef8be98d5fcbef2c0f609": "5ea1c7664d22af0a534ebe75477dae78",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/6ec082ea483049ec75aafbf6a8480f820af1e6": "cf8f02a4e4010404d8747113b2546967",
".git/objects/1b/d0f2d1ac273d5465b12625ad2633c5b6751a67": "1c4afa3206f54e8a306cecfee1a649c1",
".git/objects/1e/2d784a628abd2c138aefa5c86496fa365d50b8": "aecdf7c92dc4c554687fccb2d6204e2c",
".git/objects/4a/ec86e3bc287bb831f2c82235eda9579ad915ae": "2f72191107e01952bbba87b0cb09a27a",
".git/objects/12/3769fbd766ec39983d8ed412a4cd302c274aca": "78d41c5bf848fb1bc099864578f81ba3",
".git/objects/12/4dba263ea43619e5b2be38e05514a704390c01": "9d0e95e762117d9f032f3653d9fbdba0",
".git/objects/8c/6f9f62cb6c302e626041e1248e61baadbe387b": "38ea23779e3c8ec92d8e8904e69f9a35",
".git/objects/85/a7a8e19089da86687fd7a50ebd3277bcc718f5": "6cabc45cbfb8a0c5aecfdfd62af604a0",
".git/objects/1d/5627e5688dab71974a376318cf2b6465cc42d0": "b8613352803f6755a72de6ff25e9a132",
".git/objects/82/4273edfb28fa93e5cc4801b627f35cf2ee8220": "6418e4a18822f5a76d194ac1b6c37e7b",
".git/objects/47/96c8cbe8d80962e89d0604ef8f93361f17a726": "7ef1e97c514645742ef96736fc86055d",
".git/objects/8b/7e44e57aecdcfaff648f23f458e3e13ed246ea": "e2b530baf5a20ae8cf4dacd3874ac654",
".git/objects/14/4eb70cbc053608ced5fe31e86452e7c3fef5f3": "f5508da34f24deb134abe703f8af1fcf",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "18f2719e0235606f9cfb3d17065a5374",
".git/logs/refs/heads/master": "18f2719e0235606f9cfb3d17065a5374",
".git/logs/refs/remotes/origin/add-license-1": "ddb225947c0356d9f6180938c9d446a7",
".git/logs/refs/remotes/origin/master": "8f940f4f264563f4d746daa4612ba57e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "6921727dcdedfe97838f6c5f80e940d8",
".git/refs/tags/1.0.0": "67d7d83214f40ef9c0347ba5abd790e0",
".git/refs/remotes/origin/add-license-1": "12b07b197940d301af3e5be95cb1cf8d",
".git/refs/remotes/origin/master": "33ac26b94cb8ec6f0f3217905a34ceac",
".git/index": "9590980097f92c16906882c456c497da",
".git/COMMIT_EDITMSG": "a9154c529ed7bd4a42a99d5c3dc7e47d",
".git/FETCH_HEAD": "ea9c931f4731103572ac90c468669e8f",
"assets/AssetManifest.json": "5016909a867ad1ef2a410705a69df818",
"assets/NOTICES": "ce3f17c9f4de2df4f9920205ee1a4f4b",
"assets/FontManifest.json": "59b83b0851d35da8cee8c027d5226737",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/home/menu_icon_4.png": "052fd7b4bbeb31cbcbbdf7953ff71edd",
"assets/assets/images/home/menu_icon_5.png": "e1b1783ea307ec9d7757c76462923ecc",
"assets/assets/images/home/menu_icon_7.png": "71f96015da29cce330b654678bd066cd",
"assets/assets/images/home/menu_icon_6.png": "85f929d5d884b2e63fa9ae5b4d714d57",
"assets/assets/images/home/menu_icon_2.png": "14e56e29721917b31be9dedb6e9ab6f7",
"assets/assets/images/home/menu_icon_3.png": "c4a8f5ff523e54c4d2f2c27b9997b718",
"assets/assets/images/home/menu_icon_1.png": "f635c14b5a9d9ff16b80f42ede06cbb2",
"assets/assets/images/logo.jpg": "6e5ed1691b430892f40968ad3a5af566",
"assets/assets/images/logo.png": "b19f29e93b4a56fff4fb20a276c41259",
"assets/assets/images/generate/gen_2.png": "7420634ac1ad5698a5187d7c0b439c15",
"assets/assets/images/generate/gen_3.png": "7420634ac1ad5698a5187d7c0b439c15",
"assets/assets/images/generate/gen_1.png": "6d8dd55900d66dc110c92be81b1dafae",
"assets/assets/fonts/Prompt/Prompt-Bold.ttf": "befa1f27b3fbec48e74d58e8f7d61bb8",
"assets/assets/fonts/Prompt/Prompt-Regular.ttf": "16b4ce72cf30da14d83d5e3981d3113c",
"assets/assets/fonts/Prompt/Prompt-Italic.ttf": "80d507e9ce3f2688392683c0753478e6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
