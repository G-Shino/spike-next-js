# spike-next-js

注意点
どうやら nextjs は yarn install されたパッケージのメインパーツ(例えば、three パッケージの three)しかモジュールとして認識しないようです。
three/examples/jsm/loaders/GLTFLoader など、パッケージのサブ部分をモジュールとして import するときは、手動でその箇所の拡張子を.js から.mjs に変更してください。
2020/05/16 現在、three の
build/three.module,
examples/jsm/loaders/GLTFLoader,
examples/jsm/controls/Orbitcontrol
の三つのファイルの拡張子を変えています。
