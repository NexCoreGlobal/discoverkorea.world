# 🎬 인스타그램 릴스 업데이트 완료!

---

## ✅ **변경 사항**

### **Hero 섹션 버튼**
```
기존: "Watch Video" (유튜브)
   ↓
변경: "Watch Reel" (인스타그램 릴스)
```

### **클릭 시 동작**
```
1. "Watch Reel" 버튼 클릭
2. 모달 창 열림 (화면 중앙)
3. 인스타그램 릴스 표시
4. X 버튼 또는 바깥 클릭으로 닫기
```

---

## 📦 **업로드 방법**

### **간단 버전 (5분)**

**Step 1: 기존 파일 삭제**
```
GitHub 저장소에서:
□ index.html 삭제
□ css 폴더 삭제
□ js 폴더 삭제

유지:
✅ CNAME (절대 삭제 금지!)
```

**Step 2: 새 파일 업로드**
```
1. ZIP 파일 다운로드 및 압축 해제
2. "Add file" → "Upload files"
3. 모든 파일/폴더 드래그 & 드롭
4. Commit changes
```

**Step 3: 확인**
```
5-10분 후:
https://discoverkorea.world 접속
→ "Watch Reel" 버튼 클릭
→ 인스타그램 릴스 재생! 🎉
```

---

## 🎯 **세부 파일 변경 내역**

### **1. index.html**
```
변경:
- Hero 버튼: "Watch Video" → "Watch Reel"
- 인스타그램 릴스 모달 추가
- Instagram embed script 추가

추가된 릴스:
https://www.instagram.com/reel/DXkewSDEaLP/
```

### **2. css/style.css**
```
추가:
- .reel-modal (모달 스타일)
- .reel-modal-overlay (배경 오버레이)
- .reel-modal-content (콘텐츠 영역)
- .reel-close (닫기 버튼)
- 애니메이션 (fadeIn, slideUp)
- 모바일 반응형 스타일
```

### **3. js/main.js**
```
추가:
- 릴스 모달 열기 기능
- 릴스 모달 닫기 기능
  - X 버튼 클릭
  - 오버레이 클릭
  - ESC 키 누르기
- Instagram embed 스크립트 로딩
```

---

## 🎨 **동작 방식**

### **사용자 경험:**

**1. 메인 화면**
```
큰 Hero 섹션
↓
"Start Exploring" 버튼
"Watch Reel" 버튼 ← 새로 추가!
```

**2. 버튼 클릭**
```
"Watch Reel" 클릭
↓
화면이 어두워짐 (오버레이)
↓
중앙에 인스타그램 릴스 모달 표시
↓
릴스 자동 로딩
```

**3. 릴스 시청**
```
- 인스타그램 네이티브 플레이어
- 좋아요, 댓글 가능
- Instagram에서 보기 링크
```

**4. 닫기**
```
방법 1: X 버튼 클릭
방법 2: 검은 배경 클릭
방법 3: ESC 키 누르기
↓
모달 닫힘, 메인 화면 복귀
```

---

## 📱 **모바일 최적화**

```
✅ 반응형 디자인
✅ 터치 제스처 지원
✅ 모바일 화면 크기 자동 조정
✅ 인스타그램 앱 연동
```

---

## 🔧 **문제 해결**

### **문제 1: 모달이 안 열려요**
```
원인: JavaScript 파일 누락

해결:
1. GitHub에서 js/main.js 확인
2. 없으면 다시 업로드
3. 브라우저 캐시 삭제 (Ctrl + F5)
```

### **문제 2: 릴스가 안 보여요**
```
원인: Instagram embed script 누락

해결:
1. index.html 맨 아래 확인
2. <script async src="//www.instagram.com/embed.js"></script>
   있는지 확인
3. 없으면 다시 업로드
```

### **문제 3: 릴스를 다른 것으로 바꾸고 싶어요**
```
방법:
1. index.html 파일 열기
2. "data-instgrm-permalink=" 부분 찾기
3. URL 변경
4. GitHub에 업로드
```

---

## 💡 **추가 커스터마이징**

### **릴스 URL 변경하기**

**index.html에서 찾기:**
```html
<blockquote class="instagram-media" 
    data-instgrm-permalink="https://www.instagram.com/reel/DXkewSDEaLP/">
```

**URL 부분을 새 릴스 URL로 변경:**
```html
data-instgrm-permalink="https://www.instagram.com/reel/새릴스ID/"
```

**두 곳 모두 변경:**
```html
1. data-instgrm-permalink="..."
2. <a href="..."> 안의 URL
```

---

### **버튼 텍스트 변경**

**index.html에서:**
```html
<button class="btn btn-secondary" id="reelButton">Watch Reel</button>
```

**변경 예시:**
```html
Watch Reel → 릴스 보기
Watch Reel → 한국 문화 영상
Watch Reel → See Our Story
```

---

### **모달 스타일 변경**

**css/style.css에서:**
```css
.reel-modal-overlay {
    background: rgba(0, 0, 0, 0.9); /* 어두운 정도 */
}

.reel-close {
    color: white; /* 닫기 버튼 색상 */
    font-size: 40px; /* 닫기 버튼 크기 */
}
```

---

## 🎊 **완료!**

### **최종 체크리스트**

```
업로드 전:
□ ZIP 다운로드
□ 압축 해제
□ 파일 구조 확인

업로드:
□ 기존 파일 삭제 (CNAME 제외)
□ 새 파일 업로드
□ Commit

확인:
□ 5-10분 대기
□ 사이트 접속
□ "Watch Reel" 버튼 확인
□ 클릭해서 릴스 재생 확인
□ 모바일에서도 테스트
```

---

## 🚀 **지금 바로 업로드하세요!**

**모든 파일이 준비되었습니다!**

**15분이면 인스타그램 릴스가 사이트에 표시됩니다!** 🎬✨

---

**© 2026 DiscoverKorea**
**Experience Korea, Love Korea** 🇰🇷
