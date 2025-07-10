import { hashPassword, checkPassword } from '../utils/auth';
import bycrypt from 'bcrypt'; 


describe('Hash Password', () => {
    const plainPassword = 'myPasswordSecret?2@';

    it('Should return a different hash of original plain password', async () => {
        const hashed = await hashPassword(plainPassword);
        expect(hashed).toBeDefined();
        expect(typeof hashed).toBe('string');
        expect(hashed).not.toBe(plainPassword);
    }); 

    it('Generated hash must be equals to plainPassword by doing .compare', async () => {
        const hashed = await hashPassword(plainPassword);
        const isMatch = await checkPassword(plainPassword, hashed);
        expect(isMatch).toBe(true);
    })
})