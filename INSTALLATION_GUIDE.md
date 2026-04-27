# 🚀 DiscoverKorea 사이트 설치 및 배포 가이드

---

## 📋 **준비물**

✅ GitHub 계정
✅ discoverkorea.world 도메인 (후이즈에서 구입 완료)
✅ 사이트 파일 (이 폴더의 모든 파일)

---

## 🎯 **STEP 1: GitHub 저장소 생성**

### 1-1. GitHub 로그인
- https://github.com 접속
- 로그인

### 1-2. 새 저장소 생성
1. 우측 상단 "+" 클릭 → "New repository"
2. Repository name: `discoverkorea.world`
3. Description: `DiscoverKorea - Experience Korea, Love Korea`
4. ✅ Public 선택
5. ❌ Add a README file (체크 해제)
6. "Create repository" 클릭

---

## 📁 **STEP 2: 파일 업로드**

### 방법 A: 웹 브라우저에서 업로드 (쉬움! 추천)

1. **파일 업로드 시작**
   - 생성된 저장소에서 "uploading an existing file" 클릭
   
2. **모든 파일 드래그 & 드롭**
   ```
   - index.html
   - CNAME
   - README.md
   - css/ 폴더
   - js/ 폴더
   - data/ 폴더
   - images/ 폴더 (있다면)
   ```

3. **Commit**
   - Commit message: "Initial commit - DiscoverKorea launch"
   - "Commit changes" 클릭

### 방법 B: Git 명령어 사용 (개발자용)

```bash
# 터미널에서 실행
cd discoverkorea.world
git init
git add .
git commit -m "Initial commit - DiscoverKorea launch"
git branch -M main
git remote add origin https://github.com/[계정명]/discoverkorea.world.git
git push -u origin main
```

---

## 🌐 **STEP 3: GitHub Pages 활성화**

1. **Settings 이동**
   - 저장소 상단 메뉴에서 "Settings" 클릭

2. **Pages 설정**
   - 왼쪽 메뉴에서 "Pages" 클릭
   
3. **Source 설정**
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
   - "Save" 클릭

4. **Custom domain 설정**
   - Custom domain 입력창에: `discoverkorea.world`
   - "Save" 클릭
   - ✅ "Enforce HTTPS" 체크 (24시간 후)

---

## 🔧 **STEP 4: 후이즈 DNS 설정**

### 4-1. 후이즈 로그인
- https://whois.co.kr 접속
- 로그인

### 4-2. 도메인 관리
1. 마이페이지 → 도메인 관리
2. `discoverkorea.world` 선택
3. "DNS 설정" 또는 "네임서버 변경" 클릭

### 4-3. DNS 레코드 추가

**A 레코드 4개 추가:**
```
타입: A
호스트: @
값: 185.199.108.153
TTL: 3600

타입: A
호스트: @
값: 185.199.109.153
TTL: 3600

타입: A
호스트: @
값: 185.199.110.153
TTL: 3600

타입: A
호스트: @
값: 185.199.111.153
TTL: 3600
```

**CNAME 레코드 1개 추가:**
```
타입: CNAME
호스트: www
값: [GitHub계정명].github.io
TTL: 3600
```

**예시:**
GitHub 계정이 `ricky-kim`이면:
```
타입: CNAME
호스트: www
값: ricky-kim.github.io
```

### 4-4. 저장
- "저장" 또는 "적용" 버튼 클릭

---

## ⏰ **STEP 5: 대기 및 확인**

### DNS 전파 시간
- **최소**: 10분~1시간
- **평균**: 2~6시간  
- **최대**: 24~48시간

### 확인 방법

**1. 브라우저에서 접속 시도**
```
http://discoverkorea.world
http://www.discoverkorea.world
```

**2. DNS 전파 확인**
- https://www.whatsmydns.net 접속
- "discoverkorea.world" 입력
- 전 세계 DNS 서버 확인

**3. 명령 프롬프트 확인 (Windows)**
```cmd
nslookup discoverkorea.world
```
→ 185.199.xxx.xxx 주소가 나오면 성공!

---

## 🎉 **STEP 6: 사이트 완성!**

### ✅ 성공 체크리스트

- [ ] GitHub 저장소 생성
- [ ] 모든 파일 업로드
- [ ] GitHub Pages 활성화
- [ ] Custom domain 설정
- [ ] 후이즈 DNS 설정 (A 레코드 4개 + CNAME 1개)
- [ ] DNS 전파 대기
- [ ] 사이트 접속 확인
- [ ] HTTPS 활성화 (24시간 후)

---

## 🔐 **HTTPS 설정 (24시간 후)**

1. **GitHub → Settings → Pages**
2. **"Enforce HTTPS" 체크**
3. **완료!**

이제 `https://discoverkorea.world`로 접속 가능합니다!

---

## 📝 **콘텐츠 업데이트 방법**

### 1. GitHub 웹사이트에서 수정

```
1. 저장소 접속
2. 수정할 파일 클릭 (예: index.html)
3. 연필 아이콘 (✏️) 클릭
4. 내용 수정
5. "Commit changes" 클릭
6. 5-10분 후 자동 반영!
```

### 2. 이미지 추가

```
1. GitHub 저장소의 images/ 폴더 열기
2. "Add file" → "Upload files"
3. 이미지 드래그 & 드롭
4. "Commit changes" 클릭
```

### 3. 유튜브 영상 추가

```html
<!-- index.html에 추가 -->
<div class="video-wrapper">
    <iframe 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        title="영상 제목" 
        frameborder="0" 
        allowfullscreen>
    </iframe>
</div>
```

---

## ❌ **문제 해결**

### 사이트가 안 뜨는 경우

**1. GitHub Pages 확인**
```
Settings → Pages → "Your site is published at..."
이 메시지가 보이는지 확인
```

**2. CNAME 파일 확인**
```
저장소 루트에 CNAME 파일 있는지 확인
내용: discoverkorea.world (이것만!)
```

**3. DNS 설정 재확인**
```
후이즈에서 A 레코드 4개 + CNAME 1개
모두 정확히 입력되었는지 확인
```

**4. 브라우저 캐시 삭제**
```
Ctrl + Shift + Delete (Chrome)
캐시 이미지 및 파일 삭제
```

**5. 충분히 대기**
```
DNS 전파에는 시간이 걸립니다
최소 2-6시간 기다려주세요
```

---

## 📞 **추가 도움**

### GitHub Pages 공식 문서
https://docs.github.com/en/pages

### 후이즈 고객센터
https://whois.co.kr

### DNS 전파 확인
https://www.whatsmydns.net

---

## 🎊 **완성 후 할 일**

✅ **Google Search Console 등록**
- 사이트 검색 노출을 위해

✅ **Google Analytics 설정**
- 방문자 통계 확인을 위해

✅ **소셜 미디어 공유**
- Facebook, Instagram, Twitter에 사이트 홍보

✅ **정기적 콘텐츠 업데이트**
- 주 1회 이상 새로운 콘텐츠 추가

---

**🇰🇷 DiscoverKorea - 대한민국을 세계에! 🌏**

**성공을 기원합니다! 화이팅! 💪✨**
