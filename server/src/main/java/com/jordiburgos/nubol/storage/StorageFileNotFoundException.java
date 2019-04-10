package com.jordiburgos.nubol.storage;

public class StorageFileNotFoundException extends StorageException {

    private static final long serialVersionUID = 7717468014430697794L;

    public StorageFileNotFoundException(String message) {
        super(message);
    }

    public StorageFileNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}