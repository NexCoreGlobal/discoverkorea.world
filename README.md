# DiscoverKorea 🇰🇷

**Experience Korea, Love Korea**

한국 문화, K-Wave, 음식, 야생동물, 유산을 세계에 알리는 종합 문화 플랫폼

---

## 🌐 웹사이트

**URL:** https://discoverkorea.world

---

## 📁 프로젝트 구조

```
discoverkorea.world/
├── index.html          # 메인 페이지
├── css/
│   └── style.css      # 스타일시트
├── js/
│   └── main.js        # JavaScript
├── images/            # 이미지 저장소
├── data/              # 콘텐츠 데이터 (JSON)
├── CNAME              # 커스텀 도메인 설정
└── README.md          # 이 파일
```

---

## ✏️ 콘텐츠 업데이트 방법

### 방법 1: GitHub 웹사이트에서 직접 수정

1. **GitHub 저장소 접속**
   - https://github.com/[계정명]/discoverkorea.world

2. **파일 선택**
   - 수정하고 싶은 파일 클릭 (예: index.html)

3. **편집**
   - 연필 아이콘(✏️) 클릭
   - 내용 수정

4. **저장**
   - "Commit changes" 버튼 클릭
   - 자동으로 사이트 업데이트! (5-10분 소요)

### 방법 2: 로컬에서 작업

1. **저장소 복제**
   ```bash
   git clone https://github.com/[계정명]/discoverkorea.world.git
   cd discoverkorea.world
   ```

2. **파일 수정**
   - 텍스트 에디터로 파일 수정

3. **변경사항 푸시**
   ```bash
   git add .
   git commit -m "콘텐츠 업데이트"
   git push
   ```

---

## 🎨 이미지 추가 방법

### 옵션 1: Unsplash 사용 (무료, 저작권 걱정 없음)

1. https://unsplash.com 접속
2. 원하는 이미지 검색
3. 이미지 URL 복사
4. HTML에서 `src="이미지URL"` 형식으로 사용

예시:
```html
<img src="https://images.unsplash.com/photo-123456?w=800" alt="설명">
```

### 옵션 2: 직접 업로드

1. GitHub 저장소의 `images/` 폴더 열기
2. "Add file" → "Upload files" 클릭
3. 이미지 드래그 & 드롭
4. "Commit changes" 클릭
5. HTML에서 사용:
```html
<img src="images/my-image.jpg" alt="설명">
```

---

## 📹 유튜브 영상 추가 방법

1. **유튜브에서 영상 ID 복사**
   - 유튜브 영상 URL: `https://www.youtube.com/watch?v=VIDEO_ID`
   - `VIDEO_ID` 부분만 복사

2. **HTML에 추가**
```html
<div class="video-wrapper">
    <iframe 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        title="영상 제목" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
```

3. **예시**
```html
<!-- K-Pop Demon Hunters 영상 -->
<iframe src="https://www.youtube.com/embed/3JTVQTk36R8"></iframe>
```

---

## ✍️ 새로운 섹션 추가하기

### 1. HTML에 섹션 추가

```html
<!-- 새로운 섹션 -->
<section class="content-section my-new-section" id="new-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">새로운 섹션 제목</h2>
            <p class="section-subtitle">부제목</p>
        </div>
        
        <div class="content-grid">
            <!-- 콘텐츠 카드들 -->
            <div class="content-card">
                <div class="card-image">
                    <img src="이미지URL" alt="설명">
                </div>
                <div class="card-content">
                    <h3>카드 제목</h3>
                    <p>카드 설명</p>
                    <a href="#" class="card-link">더보기 →</a>
                </div>
            </div>
        </div>
    </div>
</section>
```

### 2. 네비게이션 메뉴에 추가

```html
<ul class="nav-menu" id="navMenu">
    <!-- 기존 메뉴들 -->
    <li><a href="#new-section">새 메뉴</a></li>
</ul>
```

---

## 🎨 색상 변경하기

`css/style.css` 파일의 `:root` 섹션에서 색상 변경:

```css
:root {
    --korean-blue: #0066CC;    /* 주 색상 */
    --korean-red: #CC0000;     /* 보조 색상 */
    --korean-gold: #FFD700;    /* 강조 색상 */
    --korean-black: #1A1A1A;   /* 텍스트 */
}
```

---

## 📝 텍스트 수정하기

### 메인 제목 수정
```html
<!-- index.html -->
<h1 class="hero-title">Discover Korea</h1>
<p class="hero-subtitle">Experience Korea, Love Korea</p>
```

### About 섹션 수정
```html
<!-- index.html의 About Section -->
<section class="about-section" id="about">
    <div class="about-content">
        <h2>About DiscoverKorea</h2>
        <p>여기에 원하는 설명 작성...</p>
    </div>
</section>
```

---

## 🌍 다국어 지원 (향후)

현재는 영어가 기본이지만, 향후 다국어 지원 예정:
- 한국어 (Korean)
- 스페인어 (Spanish)
- 포르투갈어 (Portuguese)
- 베트남어 (Vietnamese)

---

## 🔧 기술 스택

- **HTML5** - 구조
- **CSS3** - 스타일링
- **JavaScript (Vanilla)** - 인터랙션
- **GitHub Pages** - 호스팅
- **Google Fonts** - 타이포그래피

---

## 📱 반응형 디자인

사이트는 모든 기기에서 최적화되어 있습니다:
- 📱 모바일 (320px~)
- 📱 태블릿 (768px~)
- 💻 데스크톱 (1024px~)

---

## 🚀 GitHub Pages 배포

### 초기 설정

1. GitHub 저장소 생성
2. 파일 업로드
3. Settings → Pages
4. Source: `main` branch 선택
5. Custom domain: `discoverkorea.world` 입력

### 후이즈 DNS 설정

```
타입: A
호스트: @
값: 185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153

타입: CNAME
호스트: www
값: [계정명].github.io
```

---

## 📊 콘텐츠 추가 아이디어

### K-Wave
- [ ] BTS, BLACKPINK 상세 페이지
- [ ] K-Drama 추천 리스트
- [ ] K-Beauty 루틴 가이드

### Korean Species
- [ ] 진도개 입양 가이드
- [ ] 한국 인삼 vs 세계 인삼 비교
- [ ] 한국 토종 식물 도감

### Taste Korea
- [ ] 레시피 비디오
- [ ] 한식당 추천
- [ ] 한국 요리 클래스 정보

### Culture
- [ ] 이순신 장군 상세 스토리
- [ ] 한글 학습 가이드
- [ ] 한국 역사 타임라인

---

## 🎯 SEO 최적화

현재 구현된 SEO 기능:
- ✅ Meta 태그
- ✅ 의미있는 제목
- ✅ Alt 태그
- ✅ 반응형 디자인
- ✅ 빠른 로딩 속도

---

## 📧 문의

**Email:** info@discoverkorea.world

---

## 📜 라이선스

© 2026 DiscoverKorea. All rights reserved.

---

## 🎉 빠른 업데이트 체크리스트

- [ ] 이미지 추가/변경
- [ ] 텍스트 수정
- [ ] 유튜브 영상 추가
- [ ] 새로운 섹션 추가
- [ ] 색상 테마 변경
- [ ] 메뉴 항목 추가

**수정 후 반드시 Commit & Push!**

---

**Happy Editing! 🇰🇷✨**
