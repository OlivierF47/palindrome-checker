# 🧠 Palindrome Checker – FreeCodeCamp

Ce projet est une solution au défi **"Palindrome Checker"** de la certification *JavaScript Algorithms and Data Structures* proposée par [freeCodeCamp](https://www.freecodecamp.org/learn/).

---

## 📋 Exigences du projet

Ta fonction `palindrome()` doit :

- ✅ Retourner `true` si le mot ou la phrase est un **palindrome**
- ✅ Ignorer la **ponctuation**, les **espaces** et la **casse**
- ✅ Utiliser uniquement **JavaScript vanilla**

---

## 🔗 Liens

➡️https://olivierf47.github.io/palindrome-checker/

---

### 🔍 Cas de test à valider

```js
palindrome("eye")                         // true
palindrome("_eye")                        // true
palindrome("race car")                    // true
palindrome("not a palindrome")            // false
palindrome("A man, a plan, a canal. Panama") // true
palindrome("never odd or even")          // true
palindrome("nope")                        // false
palindrome("almostomla")                 // false
palindrome("My age is 0, 0 si ega ym.")  // true
palindrome("1 eye for of 1 eye.")        // false
palindrome("0_0 (: /-\\ :) 0-0")         // true
palindrome("five|\_/|four")              // false