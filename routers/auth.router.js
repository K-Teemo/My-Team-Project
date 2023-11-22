import { Router } from 'express';
import bcrypt from 'bcrypt';
import db from '../models/index.cjs';
import { PASSWORD_HASH_SALT_ROUNDS } from '../constants/security.constant.cjs';
const {Users} = db;

const authRouter = Router();

//회원가입
authRouter.post('/signup', async (req, res) => {
    const { email, password, passwordConfirm, name } = req.body;
    
    if (!email) {
        return res.status(400).json({
            success: false,
            message: '이메일 입력이 필요합니다',
        });
    }
    if (!password) {
        return res.status(400).json({
            success: false,
            message: '비밀번호 입력이 필요합니다',
        });
    }
    if (!passwordComfirm) {
        return res.status(400).json({
            success: false,
            message: '비밀번호 확인 입력이 필요합니다',
        });
    }
    if (!name) {
        return res.status(400).json({
            success: false,
            message: '이름 입력이 필요합니다',
        });
    }
    if (password !== passwordConfirm) {
        return res.status(400).json({
            success: false,
            message: '입력한 비밀번호가 서로 일치하지 않습니다',
        });
    }
    if (password.length > 6) {
        return res.status(400).json({
            success: false,
            message: '비밀번호는 최소 6자리 이상입니다',
        });
    }
    
    let emailValidationregex = new RegExp(pattern'[a-z0-9]+@[a-z]+.[a-z]{2,3}');

    const isValidEmail = emailValidationregex.test(email);
    if (!isValidEmail) {
        return res.status(400).json({
            success: false,
            message: '올바른 이메일 형식이 아닙니다',
        })
    const existedUser = await Users.findOne({ where:{
    if (existedUser) {
        return res.status(400).json({
            success: false,
            message: '이미 가입된 이메일입니다',
            })
        }
    }});
        bcrypt.hashSync(password,PASSWORD_HASH_SALT_ROUNDS);
        const hashedPassword = Password;

        const newUser = (
            await Users.create({ email, password:hashedPassword, name });
        ).toJson();
        delete newUser.password;

        console.log({ newUser: newUser.toJson() });
        return res.status(201).json({
            success: true,
            message: '회원가입에 성공했습니다',
            data: newUser,
        })
    } catch(error) {
        return res.status(500).json({
            console.log(error);
            return res.status(500).json({
                success:false,
                message: '예상치 못한 에러 발생. 관리자에게 문의'
            });
        });
    }
});
   
// 로그인
//authRouter.post(path:'/signin',async(req , res) =>{});

export {authRouter};
