CREATE DATABASE member DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- 데이터베이스 생성

USE member;
-- member 데이터베이스 사용 선언

CREATE TABLE member(
	id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'x'
);

-- member 테이블 생성

desc member;

ALTER TABLE member MODIFY id VARCHAR(10); -- id 컬럼 VARCHAR(20) -> VARCHAR(10)으로 변경
ALTER TABLE member DROP age; -- age 컬럼 삭제
ALTER TABLE member ADD interest VARCHAR(100); -- interest 컬럼 추가


CREATE TABLE user(
	id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',  -- ENUM 데이터 타입은 캐릭터형 데이터 타입이며, 해당 칼럼에 들어올 수 있는 값을 지정해 줄 수 있다
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

DESC user;

INSERT INTO user VALUES('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user VALUES('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user VALUES('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user VALUES('hanjo', 'jk48fn4', '한조', 'M', '1984-10-14', 39);
INSERT INTO user VALUES('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user VALUES('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user VALUES('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

SELECT * FROM user;

-- 1. 모든 회원목록을 가져오는데 이때 birthday 컬럼의 값을 기준으로 오름차순 정렬하여 가져오시오
SELECT * FROM user ORDER BY birthday ASC; -- ASC 오름차순은 기본값으로 안 적어도 상관 없음

-- 2. 회원 목록중 gender 컬럼의 값이 'M'인 회원목록을 가져오는데 이때 name 컬럼의 값을 기준으로 내림차순 정렬하여 가져오시오
SELECT * FROM user WHERE gender = 'M' ORDER BY name DESC;

-- 3. 1990년대에 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주시오
SELECT id, name FROM user WHERE birthday < '2000-01-01';

-- 4. 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오시오
SELECT * FROM user WHERE birthday like '%_____06%' ORDER BY birthday ASC;

-- 5. gender 컬럼의 값이 'M'이고, 1970년대 태어난 회원의 목록을 가져오시오
SELECT * FROM user WHERE gender = 'M' AND birthday <= '1979-12-31';

-- 6. 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데 그때 처음 3개의 레코드만 가져오시오
SELECT * FROM user ORDER BY age DESC LIMIT 3;

-- 7. 모든 회원목록 중 나이가 25 이상 50 이하인 회원의 목록을 출력하시오
SELECT * FROM user WHERE age >= 25 AND age <= 50;

-- 8. id 컬럼의 값이 hong1234인 레코드의 pw 값을 12345678로 변경하시오
UPDATE user SET pw = '12345678' WHERE id = 'hong1234';

-- 9. id 컬럼의 값이 jungkrat인 레코드를 삭제하시오
DELETE FROM user WHERE id = 'jungkrat';