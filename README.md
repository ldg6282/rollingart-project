# 🎨 RollingArt

<p align="center">
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMzAg/MDAxNzIzMDA4NzExNjU3.R04Jiy_LJd06RnvH0HAkC23GX7JcPfiTUzGfxfCRPmgg.znsnKI370Du_B7a-7N0Elk0ZYE5lJQkSavpBCH9Vcy8g.PNG/icon_(1).png?type=w773" width="350px">
</p>
<p align="center">
RollingArt는 스마트폰을 기울여 공을 조작해 정해진 길을 따라 그림을 그리는 게임입니다.<br>
정해진 시간 내에 정확하게 그림을 그려 도전 과제를 달성하고 스테이지를 클리어 하세요!
</p>
<br><br>

# 🔗 Link

<br>

<p align="center">
<a href="https://youtu.be/0NLtLE0X8eA?si=OfnYzRS0bnMXJ1G3">🎮 게임 플레이 영상</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://apps.apple.com/kr/app/rollingart/id6505098989"><img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMTc3/MDAxNzIzMDE1MTA1MDI2.B873hqe7DVuZZUIlyAUX_J8aDDbkyaBREDCh8cJj1Gog.fPtBHJr7-UqkmX_65zyTFiDmLFCiG2uXMRGJMo3Uc-gg.PNG/app-store-png-logo-33118.png?type=w773" style="width:15px; vertical-align: middle;"> App Store</a>
</p>
<br><br>

# 🛠 Tech Stack

### | Frontend

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![ReactNative](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)

### | 3D

![Static Badge](https://img.shields.io/badge/ThreeJs-black?style=for-the-badge&logo=three.js&logoColor=white)
![ReactThreeFiber](https://img.shields.io/badge/R3F-black.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyMl8zNSkiPgo8cmVjdCB4PSIxNyIgd2lkdGg9IjMxIiBoZWlnaHQ9IjE0IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIzNCIgeT0iMTQiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNyIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTciIHk9IjE3IiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHk9IjE3IiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjE3IiB5PSIzNCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyMl8zNSI+CjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4=&style=for-the-badge)

### | Test

![Static Badge](https://img.shields.io/badge/jest-%23944058?style=for-the-badge&logo=jest)
<br><br><br>

# 🤔 Why Expo?

Expo는 React Native를 사용한 개발에 도움이 되는 다양한 기능을 지원하는 프레임워크입니다.<br>

### 크로스 플랫폼 지원

`App Store`와 `Google Play Store` 모두 앱을 출시하고 싶었고, 그러기 위해서는 2개의 플랫폼 모두에서 대응 가능한 코드로 개발을 진행해야 했습니다.<br>
Expo는 하나의 코드 베이스로 `iOS`와 `Android` 모두에서 동작하는 앱을 개발할 수 있어 개발 시간을 줄일 수 있다는 장점이 있었습니다.

### 다양한 API 제공

Expo는 카메라, 센서, 오디오 등 다양한 네이티브 기능에 대한 간편한 API를 제공합니다.<br>
RollingArt에서 가장 중요한 가속도계 센서 데이터를 쉽게 활용할 수 있었고, 게임 배경 음악을 위한 오디오 API 또한 손쉽게 사용할 수 있었습니다.<br>
이러한 API들은 네이티브 모듈 연결 없이도 바로 사용할 수 있어, 개발 기간은 단축할 수 있다고 생각했습니다.

### 실시간 테스트

Expo의 실시간 리로딩 기능은 개발을 편리하게 만들 수 있다고 생각했습니다.<br>
코드 변경 사항을 즉시 확인할 수 있어, 특히 물리 엔진과 사용자 인터페이스 조정과 같은 반복적인 작업에서 매번 빌드하지 않고 확인할 수 있다는 것이 큰 장점으로 다가왔습니다.<br>
Expo Go 앱을 통해 실제 디바이스에서 즉시 테스트할 수 있어, 센서 기반의 게임플레이를 실시간으로 확인하고 조정할 수 있다는 장점도 존재했습니다.

프로젝트 진행 기간이 짧았고, React Native로 앱을 개발하는데 있어 많은 도구를 제공해주는 Expo를 사용하여 개발을 진행하였습니다.
<br><br><br>

# Contents

- [🧲 Motivation](#-motivation)
  - [(1) 센서를 활용해 보자](#1-센서를-활용해-보자)
  - [(2) 물리를 직접 구현하자](#2-물리를-직접-구현하자)
  - [(3) 3D로 만들자](#3-3d로-만들자)
- [📱 Preview](#-preview)
- [🔥 Challenge](#-challenge)
  - [공의 이동과 물리 법칙](#공의-이동과-물리-법칙)
    - [1. 어떻게 공을 이동하게 만들까](#1-어떻게-공을-이동하게-만들까)
      - [1-1. 가속도 센서 데이터 수집](#1-가속도-센서-데이터-수집)
      - [1-2. 공의 가속도 계산](#2-공의-가속도-계산)
      - [1-3. 공의 속도 업데이트](#3-공의-속도-업데이트)
      - [1-4. 공의 위치 업데이트](#4-공의-위치-업데이트)
    - [2. 공의 회전 방향을 어떻게 설정할까](#2-공의-회전-방향을-어떻게-설정할까)
      - [1-1. 공의 이동 방향 계산](#1-공의-이동-방향-계산)
      - [1-2. 공의 회전 축 결정](#2-공의-회전-축-결정)
  - [물리 법칙 어떻게 만들까](#3-물리-법칙-어떻게-만들까)
  - [센서 데이터 인식의 차이](#센서-데이터-인식의-차이)
  - [공의 이동에 따른 실시간 텍스처를 변형](#공의-이동에-따른-실시간-텍스처를-변형)
    - [1. 셰이더란 무엇이며 어떻게 활용할 수 있을까](#1-셰이더란-무엇이며-어떻게-활용할-수-있을까)
    - [2. Vertex Shader는 좌표를 변환하고 Fragment Shader는 그림을 그린다](#2-vertex-shader는-좌표를-변환하고-fragment-shader는-그림을-그린다)
  - [컴포넌트 분리를 통한 최적화](#컴포넌트-분리를-통한-최적화)
    - [1. Ball 컴포넌트가 수행하는 일이 너무 많다](#1-ball-컴포넌트가-수행하는-일이-너무-많다)
    - [2. Modelloader 컴포넌트의 관심사 분리](#2-modelloader-컴포넌트의-관심사-분리)
    - [3. 컴포넌트 분리를 완료한 이후의 성능 확인](#3-컴포넌트-분리를-완료한-이후의-성능-확인)
- [🗓️ Schedule](#️-schedule)
- [💭 Memoir](#-memoir)

  - [이도건](#이도건)
  - [강유진](#강유진)

    <br><br><br>

# 🧲 Motivation

저희 RollingArt 프로젝트는 스마트폰의 센서를 실시간으로 받아오고 처리해서 메인 로직을 구성해 보자는 목표에서 출발했습니다.

#### **1. 센서를 활용해 보자<br>**

스마트폰 센서를 활용하여 사용자의 물리적 움직임을 화면에 실시간으로 표현하고 싶었습니다.<br>
실시간으로 상호작용이 요구되는 프로젝트의 특성상 게임의 형태가 가장 적합하다고 판단했습니다.<br>
그중에서도 가장 직관적으로 표현이 가능한 기울기 센서를 사용하기로 했습니다.

#### **2. 물리를 직접 구현하자<br>**

어떤 식으로 센서를 활용할지 고민했고, 기울기에 따른 움직임을 가장 직관적으로 보여줄 수 있는 물체로 구 형태가 가장 적합하다고 생각했습니다.
JavaScript로 물리 엔진을 직접 구현하여 기울기에 따른 구의 움직임을 자연스럽게 표현해 보고 싶었습니다.

#### **3. 3D로 만들자<br>**

현실적인 물리의 움직임을 실감 나게 표현하기 위한 도구로 2D보다는 3D 그래픽을 사용하기로 했습니다.<br>
익숙한 2D 요소가 아닌 3D를 다루어 본다는 것 자체로 하나의 경험이 될 것으로 생각했습니다.<br>
<br>

팀원 모두가 모바일 앱 프로젝트는 처음이었기 때문에 웹에서는 경험해보지 못한 새로운 챌린지가 있을 것으로 생각했습니다.
<br><br><br>

# 📱 Preview

<br>
<p align="center">
<img src="https://postfiles.pstatic.net/MjAyNDA4MDhfMjU0/MDAxNzIzMDQ5MTQ1NzAy.ApOh7xvgSZf2J7R_PopxAUSB-loPkoP1vG07pUc1nFQg.hdOlfOV09jy_76MhLk64by-RIwOXm1Iy1SBKB7gcFNgg.GIF/4.gif?type=w3840" width="250px">&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://postfiles.pstatic.net/MjAyNDA4MDhfMTIx/MDAxNzIzMDQ5NjcxNjg5.-pPTo3kBSrf8vQnM6XWgsaMSF1Tp7JFSS_48JgAvmAAg.KnzaQvJ4vaPUNptRivK_7_X9R0OCepG_mwDYlV_q7YUg.GIF/5.gif?type=w3840" width="250px">&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://postfiles.pstatic.net/MjAyNDA4MDhfMTMz/MDAxNzIzMDQ5NjcxNjM2.rhV63jY_He9KJbgazh0Q5C_BPZRrzcG-UITQU7yqadIg.O6pXSODl37BLoCblmFqjZjqtYRUcQUdqntjqaZDa3L0g.GIF/2.gif?type=w3840" width="250px">&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://postfiles.pstatic.net/MjAyNDA4MDhfMjYg/MDAxNzIzMDQ5NjcxODQ1.3atsyiwdCGS1HNGS1FFt65Q7nTwzkZnSQVtUivuEjDQg.Mp9B4pi4FxJEgFq18AuyVHAY5Rzi8vph9vBGbbDaWtwg.GIF/3.gif?type=w3840" width="250px">&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://postfiles.pstatic.net/MjAyNDA4MDhfMTY2/MDAxNzIzMDQ5NjcxNTE1.-IsUf4o8yExqROpqtRmgtlV1X8FyWkTTu_rkAdwuxBYg.CG_Uk3_D6mRXVAi3dMQCcG2Hpng7xnkPJZgXqBeMQDog.GIF/1.gif?type=w3840" width="250px">
</p>
<br><br><br>

# 🔥 Challenge

## 공의 이동과 물리 법칙

### 1. 어떻게 공을 이동하게 만들까?

공의 이동은 가속도계 센서 데이터를 사용하여 구현했습니다.<br>

<p align="center">
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMiAg/MDAxNzIzMDIxMjMwODE5.FhZODehv2Onn3RcsSbhS7KqGJiMxvrqOgzg3Y7FW8V0g.zjJdsA4BAtAKQ97qveYWAYrcE7JTCMZmy4uNQOvk-fUg.PNG/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-07-01_153758.png?type=w773" width="350px"><br>
</p>
가속도계 센서는 스마트폰을 앞, 뒤, 좌, 우로 기울기가 인식되는 센서를 말합니다.

#### 1. 가속도 센서 데이터 수집<br>

```
const [accelData, setAccelData] = useState({ x: 0, y: 0, z: 0 });

let accelLastUpdate = Date.now();
    Accelerometer.setUpdateInterval(300);
    const accelSubscription = Accelerometer.addListener((result) => {
      const now = Date.now();
      if (now - accelLastUpdate >= 300) {
        const normalizedData = normalizeSensorData(result, "accelerometer");
        if (
          initialTilt.current.x === 0 &&
          initialTilt.current.y === 0 &&
          initialTilt.current.z === 0
        ) {
          initialTilt.current = normalizedData;
        }
        setAccelData(normalizedData);
        accelLastUpdate = now;
      }
    });
```

- 처음 스테이지에 접속했을 때 기울기의 값이 0으로 지정됩니다.
- 사용자가 스마트폰을 기울이면, 기기의 가속도 센서가 이 움직임을 감지하고 데이터로 변환합니다.
  <br><br>

#### 2. 공의 가속도 계산

```
const adjustedX = accelData.x - initialTilt.current.x;
const adjustedY = -(accelData.y - initialTilt.current.y);

const extraTiltX = adjustedX * 4;
const extraTiltY = adjustedY * 4;
```

- 초기 기울기를 기준으로 스마트 폰의 기울기를 통해 공의 가속도를 계산합니다.
  <br><br>

#### 3. 공의 속도 업데이트

```
useFrame((state, delta) => {
  velocity.current.x += (extraTiltX + landSlopeX) * delta * (sensitiveCount + 3);
  velocity.current.z += (extraTiltY + landSlopeZ) * delta * (sensitiveCount + 3);
  velocity.current.y = 1;
});
```

- 계산된 공의 가속도를 바탕으로 공의 속도를 계산합니다.
  <br><br>

#### 4. 공의 위치 업데이트

```
useFrame((state, delta) => {
  position.current.x += velocity.current.x * delta * 2;
  position.current.z += velocity.current.z * delta * 2;
  position.current.y += velocity.current.y * delta * 2;
});
```

- 계산된 공의 속도를 바탕으로 공의 위치를 업데이트 합니다.

공의 속도와 위치를 계산할 때 `ReactThreeFiber`에 존재하는 메서드인 `useFrame`을 사용합니다.<br>

`useFrame`은 매 프레임마다 호출되는 콜백 함수로, 애니메이션을 구현할 때 사용됩니다.<br>

이 메서드를 통해 delta(프레임 간 시간 간격)를 전달받아 사용함으로써,프레임 레이트와 무관하게 일정한 움직임을 보장할 수 있습니다.<br>

<p align="center">
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMjEz/MDAxNzIzMDIxOTU3OTIw.eHatusgW9pla04qSgELg5khX64har1fAo5UQH0re2xEg.wOj96EyzYCxsq3CUch4AB6Qjfe9Ee9UFLRlEHIeFevUg.GIF/%EA%B3%B5%EC%9D%98_%EC%9D%B4%EB%8F%99.gif?type=w3840" width="250px">
</p>
이렇게 구현함으로써, 사용자가 스마트폰을 기울일 때마다 실시간으로 공의 움직임이 화면에 반영되어 공이 이동하게 됩니다.
<br><br>

### 2. 공의 회전 방향을 어떻게 설정할까?

360도의 방향 어디든 공의 이동이 가능한 특성 상 공의 이동 방향이 바뀔 때마다 공의 회전도 함께 바뀌어야 했고 그렇지 않으면 유저의 사용성이 떨어진다고 생각했습니다.

결론은 공의 이동 방향이 바뀔 때마다 회전축을 새로 설정하여 공의 움직임에 따라 회전도 자연스럽도록 로직을 구성하는 것이었습니다.

<p align="center">
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMjgy/MDAxNzIzMDMwMDU4Mjc0.eUimPUxs-4MQDt63ZRJ--39u7qBZ0hBY5A7DCa1nM6gg.bMKYVBMHEJ4NXZ9DLP56hjYOeTg21kgO2E_R4XXAMvwg.PNG/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-08-07_202728.png?type=w773" width="600px"><br>
</p>

#### 1. 공의 이동 방향 계산

```
useFrame((_, delta) => {
  const moveDirection = new THREE.Vector3(
    velocity.current.x,
    0,
    velocity.current.z
  ).normalize();
});
```

- 프레임 마다 `useFrame`을 호출해 공이 이동하고 있는 방향을 계산합니다.
  <br><br>

#### 2. 공의 회전 축 결정

```
useFrame((_, delta) => {
  const rotationAxis = new THREE.Vector3()
    .crossVectors(new THREE.Vector3(0, 1, 0), moveDirection)
    .normalize();
});
```

- 공의 이동 방향을 계산함과 동시에 이동 방향을 기준으로 수직이 되는 가로 축을 설정합니다.<br><br>
<p align="center">
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfOCAg/MDAxNzIzMDIzNTAyOTA1.IYQHxvyZuQEPGeeFk-2SZFIUWtXtnxJ5qrWS8BJ-O80g.VL1WLu-rWekB0pOalCJDTAqpArfnfn7LZjHSriQt7Xgg.GIF/%EA%B3%B5%EC%9D%98_%ED%9A%8C%EC%A0%84.gif?type=w3840" width="253px">
</p>
그 결과 공이 어느 방향으로 이동해도 이동 방향에 맞춰 공이 회전하는 축이 자연스럽게 설정되는 것을 볼수 있었습니다.

### 3. 물리 법칙 어떻게 만들까?

직접 구현한 물리법칙으로 중력, 마찰력, 가속도, 충돌이 있습니다.

1. 중력
   중력을 구현함에 있어 가장 중요한 점은 스테이지의 땅을 인식하고 그 위치에 공이 맞닿아 올라가있어야 한다는 점이었습니다.<br>

그러기 위해서는 땅을 인식할 수 있는 방법이 필요했고 선택한 방법은 `Raycaster`를 사용하여 구현하는 것이었습니다.

**Raycaster란?**<br>

<p align="center">
<img src="https://marsh-planarian-d5e.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F16a0390f-8eb4-4f49-9d9f-59f69666b5a9%2F47cbd56f-2fc7-4fd2-93d9-7f8ae2fd343b%2FUntitled.png?table=block&id=f24f26fe-4de0-4280-a9d8-fb1993dc846c&spaceId=16a0390f-8eb4-4f49-9d9f-59f69666b5a9&width=940&userId=&cache=v2" width="500px">
</p>
보이지 않는 광선을 발사하여 광선이 맞닿는 부분을 인식하는 Three.js의 메서드 입니다.<br>

```
const raycaster = useRef(new THREE.Raycaster());

raycaster.current.set(
  new THREE.Vector3(position.current.x, position.current.y + 10, position.current.z),
  new THREE.Vector3(0, -1, 0),
);
```

<p align="center">
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMjE2/MDAxNzIzMDMyMTIxMDA5.3gU7d2UZiem97mJlB4jqdU--PpC6XdEMi76wWOtXSMIg.HBoqApto4EsEUeLH-sNlYtB5YOIP2RxCO5UZp2X4tEEg.GIF/%EB%A0%88%EC%9D%B4%EC%BA%90%EC%8A%A4%ED%84%B0.gif?type=w3840" width="500px">
</p>
<br><br>

`Raycaster`의 방향을 지정하여 광선이 땅과 교차되는 지점을 바닥으로 인식하게 했지만, 공에 중력이 적용되어야 공이 바닥에 맞닿아 있을 수 있기 때문에 중력 값을 임의로 지정했습니다.

```
const gravity = -9.8;
velocity.current.y += gravity * delta;
```

지구의 중력 값을 그대로 적용해 `useFrame`에서 사용한 프레임의 단위인 delta를 사용하여 매 프레임 마다 -9.8이라는 `gravity`값을 적용하여 중력이 적용된 것처럼 구현했습니다.

## 센서 데이터 인식의 차이

가속도계 센서 데이터를 받아와 공의 이동을 구현한 후 `Android` 기기에서는 의도한 방향대로 공이 이동하는 것을 확인하였습니다.<br>
하지만 `iOS` 기기에서는 `Android` 반대의 방향으로 센서가 인식되어 공이 굴러갔습니다.<br>

<p align="center">
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMjk0/MDAxNzIzMDM0NTg1MDQz.NdpB2tnJ1xI74a3Eu7f4U7NxNKNnXFg-tTtxTzBz4i0g.ebokcv3H_KNLSQsQP9MWWHYrpzMj1LFWuMCK59DJgpcg.PNG/image.png?type=w3840" width="300px">
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMjcx/MDAxNzIzMDM1NDU3ODYw.1zy7DwnSgPi3cSUWgzKKir6f5bNDgqJLlsz8QTsNFKAg.-Ynvmt8V6ATxem6PI9jgWm-rwEF1JfvA3ngDmdxMSBIg.PNG/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-08-07_215706.png?type=w773" width="428px"><br>
<br>
</p>
원인은 플랫폼에서 오는 센서의 인식 값에 차이에서 비롯된 것이었습니다.<br>
`Android`는 +로 인식하는 것을 `iOS`는 -로 인식하고 있었고, 반대로 공이 이동하는 것을 해결하기 위해 조건문을 사용하여 iOS와 Android의 센서 인식값을 다르게 설정했습니다.
<br><br>
<p align="center">
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMTA0/MDAxNzIzMDM0NTg5MzU2.3yMTEyAXVFWwRYRSz9Wb8AHyJ4-HJ__t-7SWjl5I0Rsg.XMybKZalWdnLJTfSz2A2nnQkVnaB16OPT2BAdlYsOswg.PNG/image.png?type=w3840" width="350px"><br>
</p>
그 결과 `Android`와 `iOS`에서의 공의 이동 방향이 모두 일치하는 것을 확인할 수 있었습니다.

## 공의 이동에 따른 실시간 텍스처를 변형

공이 이동할 때마다 바닥에 그림을 그리는 것처럼 보이게 하기 위해서는 바닥 텍스처에 대한 실시간 변형이 이루어져야 했습니다. 이렇듯 실시간 그래픽 처리를 위한 기술로써 셰이더(Shader)를 활용해볼 수 있었습니다.

### 1. 셰이더란 무엇이며, 어떻게 활용할 수 있을까?

셰이더는 간단히 말해 **화면에 출력할 픽셀의 위치와 색상을 계산하는 함수**입니다. 셰이더는 그래픽 처리장치(GPU)에서 처리되며, 주로 그래픽에 대한 조작이 실시간으로 이루어져야 할 때 활용합니다. <br>
<br>
Three.js에서의 ShaderMaterial을 활용하면 프로그래머가 작성한 셰이더 코드를 프로젝트에 적용할 수 있습니다. 여기서 또 한가지 알아야 할 것은, ShaderMaterial를 구성하는 요소로 **Vertex Shader**와 **Fragment Shader** 두 가지가 있다는 것입니다.

<p align="center">
<br>
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMTE2/MDAxNzIzMDIzNDI0MzI2.sUnzEpyxaasxWLgL-OJbLTio6cWbajFnuZH-hdYKBfsg.zLnz_ms3UEbZphqFWtjJCA6lyKpAnozxmcIGsw2Z-u0g.PNG/c2_pipeline.png?type=w966" width="600px">
<br>
</p>

3D 모델링은 수 많은 정점(Vertex)으로 이루어져 있습니다. 저희 프로젝트에 사용된 '섬(땅)'에 대한 모델링만 보아도 무수히 많은 점들이 모여 하나의 덩어리를 이루고 있음을 확인할 수 있습니다.

<p align="center">
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMTMw/MDAxNzIzMDI2NjE1MDU2.KpcoDPiG7P2UUarLEGS5WwBONdWOBJWRH2MrSdyrWMYg.36IVzj3AQCbHWo5SeZ39xdkSk4KsfI86RLz_nimPeFgg.PNG/SE-aab78ce5-ef99-4182-b0ee-21555867927c.png?type=w3840" width="600px">
<br>
</p>

Vertex Shader는 이러한 정점에 대한 변형 동작을 수행하며, 각 정점의 위치가 화면 상의 어느 위치에 그려질 것인지에 대한 값을 출력합니다. Vertex Shader가 출력한 값을 기반으로 실제 화면의 픽셀에 그려질 최종적인 모습을 결정하는 것이 Fragment Shader입니다.
<br><br>
Vertex Shader는 정점 단위로, Fragment Shader는 픽셀 단위로 연산을 수행한다고 정리해볼 수 있겠습니다.

### 2. Vertex Shader는 좌표를 변환하고 Fragment Shader는 그림을 그린다.

사용자의 조작으로 인해 공의 위치가 변화하면, '공이 어디에 위치해 있는지'에 대한 좌표 값을 Vertex Shader에 전달합니다.
이제 Vertex Shader의 역할은 Fragment Shader에서의 연산을 위해 '공의 정확한 위치를 계산'하는 것입니다.<br>
<br>
Fragment Shader는 각 픽셀에 따른 연산을 담당하기 때문에, 화면 기준에서의 공의 위치를 필요로 합니다. 처음 공의 위치를 구하고 전달할 때의 좌표 값은 '공의 로컬 좌표'입니다.<br>
<br>
3D 공간에서 객체가 가질 수 있는 좌표에는 종류가 여러 개 있으며, 크게 다음과 같이 나누어 볼 수 있습니다.
| |로컬 좌표|월드 좌표|카메라 좌표|
|:-:|:-:|:-:|:-:|
|좌표 기준|객체 자신|3D 공간 전체|카메라의 위치와 방향|
|용도|객체의 각 부분에 대한 상대적 위치를 표현|모든 객체의 절대적 위치를 표현|객체가 화면에 어떻게 보일지 결정|

<br>
결론적으로, Vertex Shader는 다음의 일을 수행합니다.
<p align="center">
<br>
<em>공의 로컬 좌표를 전달받음 → 로컬 좌표를 월드 기준의 좌표로 변환 → 월드 기준의 좌표를 카메라 기준으로 변환 → 최종적으로 3D 공간 좌표를 2D 화면 기준(픽셀)으로의 좌표로 변환</em>
</p>
<br>
이제 Fragment Shader는 Vertex Shader에서 전달받은 값을 활용해 실제 화면에 그림을 그리는 역할을 합니다. 공이 지나간 자리의 픽셀을 주황색으로 설정하는 식으로 픽셀에 대한 조작을 가할 수 있습니다. <br>
<br>
처음 구현을 시도했을 때에는 3D 공간에서의 좌표 간 차이와 변환의 필요성을 인지하지 못했습니다. 각 좌표 간 변환이 이루어지지 않았을 때에는 공의 이동 경로와 그림이 그려지는 위치가 일치하지 않았습니다.<br>
<br>
<p align="center">
<img src="https://github.com/user-attachments/assets/bd53d778-376d-4e8c-83b9-5956c56fa88e" width="250px">
<img src="https://github.com/user-attachments/assets/bdeacf7c-c8ab-4cb4-8591-696857c0a57f" width="250px">
</p>
<br>
좌표 간 변환이 정확하게 이루어졌을 때 공의 정확한 이동 경로에 텍스처 변형을 가할 수 있었습니다.
</br>

## 컴포넌트 분리를 통한 최적화

Rolling Art에서는 두 가지 주요한 로직이 실시간으로 이루어집니다.

1. 공의 이동
2. 공의 이동 경로에 따른 바닥 텍스처 변형

위의 두 가지 주요 로직이 모두 구현되고 난 뒤, 심각한 성능 저하를 경험했습니다. 공이 이동할 때마다 화면이 끊겨 보여 이대로라면 게임 플레이가 원활하게 이루어지기 힘들 것 같았습니다. <br>

<p align="center">
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMTgw/MDAxNzIzMDQwMDA5NDIw.KEeq3dXvUqRhgHVBNPxcBXobB41CR5pY-ZszjViUIoAg.0o_XGKDPLhhnJsG3VeEk207vRwqOssQznFShgxd5uUsg.GIF/343976027-146a3d6f-5a8c-4976-b8ea-638dab3aaf74.gif?type=w3840" width="250px">
</p>

처음 최적화를 위해 떠올린 방법은 실시간으로 이루어지는 로직이 각각 다른 스레드에서 실행되게 하는 것이었습니다. 스마트폰의 스레드를 활용하면 성능을 향상시킬 수 있을 것이라고 생각했습니다. 성능 저하의 원인을 JavaScript의 싱글 스레드 때문일 것이라고 짐작하여 생각한 해결책이기도 합니다. <br>
<br>
그러나 이러한 해결책은 저희 프로젝트에 적절하지 않았습니다. 스마트폰의 스레드를 활용하기 위해서는 필요한 연산에 대해 네이티브 코드를 각각 작성해야 합니다. 이는 '하나의 JavaScript 코드로 iOS와 Android 양쪽에 대응'하고자 했던 저희의 최초 목표에서 벗어나는 일이었습니다.
<br>
우선 JavaScript 코드 안에서 최적화를 시도할 것을 결정한 뒤 코드를 돌아보니 커다란 개선점이 보였습니다.
<br>

### 1. Ball 컴포넌트가 수행하는 일이 너무 많다.

<div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap;">
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMjI1/MDAxNzIzMDM4OTU2MjU4.-t-aZJXfPXL2cM39AC7bKdn97FNzvPRu2Q5-swkpDJkg.E6Dn2uN2S1y9SVFkHwjEu7rLcJkzDUXrAwSp_thkNo0g.PNG/%EB%B3%BC1.png?type=w966" width="150px">&nbsp;&nbsp;&nbsp;
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMjY3/MDAxNzIzMDM4OTU2MTI3.JgOVT9vuxVXAKO_5AeyFd7a6VwbZ62cTi_l6T3op4R0g.H7DHAFjUQ8R_7_fj4m24LuTxhSgWo8vSb9RSq0Xj_eIg.PNG/%EB%B3%BC2.png?type=w966" width="150px">&nbsp;&nbsp;&nbsp;
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMjY1/MDAxNzIzMDM4OTU2NDA2.RyJ27WZi0RjpJ4V-u2ns9zJ7EXYtbNEM8jthCoFE2_sg.JrzuaEijPTL9D6FGEPLOQCrLERQ2DwN30s0oTTyLbp8g.PNG/%EB%B3%BC3.png?type=w966" width="150px">&nbsp;&nbsp;&nbsp;
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMjI0/MDAxNzIzMDM5MjE2ODQy.UEGM1Oc5v95_qL_ssQAGU7fdpgtGK4Tzx1GK9rRLqVAg.7EF5cETExEs0KC_f7Xd8SVUjH_o7PG6RMY2AhNgoyGog.PNG/%EB%B3%BC4.png?type=w966" width="150px">
</div>

최적화 작업이 이루어지기 전의 Ball 컴포넌트입니다. <br> 하나의 Ball 컴포넌트가 물리에 대한 연산과 동적 텍스처 변형을 모두 수행하고 있었습니다. Ball 컴포넌트가 순수하게 이동에 관한 로직만 수행한다고 했을 때, 붉은 색으로 표시한 코드만이 남아있어야 합니다. 공 컴포넌트에 대한 로직 분리를 진행, 실시간 텍스처에 대한 연산은 별도의 함수로 분리해주었습니다.

### 2. ModelLoader 컴포넌트의 관심사 분리

<br>
<p align="center">
<img src="https://postfiles.pstatic.net/MjAyNDA4MDdfMzgg/MDAxNzIzMDM2MDE1MzY2.J-3ctICz6H3P_Uv1ojO0cIon5UiLQstLY4CpwSrO134g.P5Al3an9EM4AyqL-XDABOGcO4KkWdxQz4AQY-epOVx0g.PNG/%EA%B4%80%EC%8B%AC%EC%82%AC.png?type=w966" width="300px">
</p>

ModelLoader 컴포넌트는 본래 말그대로 3D 모델링 파일을 읽어들이는 역할을 수행하고 있었습니다.
문제는 실시간 텍스처 변형을 구현하는 과정에서 ModelLoader 컴포넌트에서 공에 셰이더를 적용하는 역할이 추가된 데 있었습니다. <br>
때문에 3D 모델링을 불러오는 모든 컴포넌트에서 불필요하게 공의 셰이더에 관련한 코드를 읽어들이고 있는 상황이었습니다.<br>
ModelLoader 본래 역할에 맞게 붉은 색으로 표시한 코드만을 수행해야하며, 다른 코드는 분리하는 것이 적절했습니다.
<br>

### 3. 컴포넌트 분리를 완료한 이후의 성능 확인

<p align="center">
<img src="https://postfiles.pstatic.net/MjAyNDA4MDhfMjY5/MDAxNzIzMDk4MTc3MjUw.Fzv2j7Ah4UHg8I4x9k96LgL4EoxRC_lmwvbiHuokidYg.4AvzmpU0PlRpTAA5IjALJjr98mT1tfgMS8cqJ9rY2z4g.GIF/%EC%B5%9C%EC%A2%85_%EB%B9%8C%EB%93%9C_(online-video-cutter.com)_(1)_(1).gif?type=w3840" width="250px">
</p>
위와 같이 각 컴포넌트가 수행할 역할을 확실히 정하고 기능을 분리했을 때 성능이 향상됨을 확인할 수 있었습니다.
<br><br><br>

# 🗓️ Schedule

<br><br><br>

# 💭 Memoir

### 이도건

단순히 스마트폰의 센서를 이용해서 실시간으로 처리하는 앱을 만들어보자는 생각에서 시작한 프로젝트 주제였습니다.<br>
가장 적합하다고 결정된 것이 게임이었고, gyro 팀원인 유진님과 저 둘다 게임을 좋아했기 때문에 정말 많은 대화가 오고가며 기획과 개발을 진행한 프로젝트였던 것 같습니다.<br>
처음에 구성했던 KanBan이 뒤로 밀리게 되고, 프로젝트 일정을 맞추기 위해 기획을 조정하는 순간들이 팀으로 개발한 프로젝트였기에 가능했다고 생각합니다.<br>
공의 움직임, 물리를 구현하고, 3D를 접하며 새로운 기술에 대한 경험을 하는 것도 좋았지만, 팀으로써 소통하고 협업하는 방법에 대해 배울 수 있는 좋은 경험이었습니다.<br>
재밌고 소중한 경험을 하게해준 gyro 팀원 유진님 너무 감사합니다.

### 강유진

처음 겪어보는 것 투성이에 어려움이 많았지만 그만큼 배우고 성장할 수 있는 기회가 되었던 거 같습니다. <br>물리엔진의 구현에 대해 걱정이 많았는데 다행히도 팀 프로젝트여서 무사히 해낼 수 있었다고 생각합니다.<br>
구현 과정 중에서도 '최적화'에 대한 것이 특히 기억에 남습니다. 컴포넌트 관심사 분리의 중요성에 대해서는 익히 들었지만 그간 '중요하다.'라고 개념적으로만 알고 실감하지는 못했던 거 같습니다. 최적화 과정을 겪으며 직접 그 중요성에 대해 체감하고 개선점을 눈으로 확인할 수 있어 좋았습니다.<br>
RollingArt 프로젝트를 통해 여러 귀중한 경험을 할 수 있었던 거 같아 만족스럽습니다. 경험을 거름삼아 더 나은 개발자로 성장하고 싶습니다!
