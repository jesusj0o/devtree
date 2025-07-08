import bcript from 'bcrypt';

export const hashPassword = async (password : string) => {
    const salt = await bcript.genSalt(10);
    return await bcript.hash(password, salt);
}

export const checkPassword = async (enterPassowrd: string, hash: string) => {
    return await bcript.compare(enterPassowrd, hash);
}