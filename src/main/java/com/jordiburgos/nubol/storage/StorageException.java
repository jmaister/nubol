package com.jordiburgos.nubol.storage;

public class StorageException extends RuntimeException {

    private static final long serialVersionUID = -3132351904722533476L;

    public StorageException(String message) {
        super(message);
    }

    public StorageException(String message, Throwable cause) {
        super(message, cause);
    }
}
