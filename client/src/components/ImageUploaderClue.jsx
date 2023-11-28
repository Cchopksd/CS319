import React, {useState, useRef, useEffect} from "react"
import "./css/ImageUploaderClue.css"

const ImageUploaderClue = ({ onDataSend }) => {


    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    useEffect(() => {
        onDataSend(images)
    },[images])

    const selectFiles = () => {
        fileInputRef.current.click();
    }

    const onFileSelect = async (event) => {
        const files = event.target.files;
        if (files.length === 0) return;
        for (let i = 0; i < files.length; i++){
            if (files[i].type.split('/')[0] !== "image") continue;
            if (!images.some((e)=> e.name == files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                        file: event.target.files[0]
                    },
                ])
            }
        }
    }

    const deleteImage = async (index) => {
        setImages((prevImages) => 
            prevImages.filter((_, i) => i != index)
        );
    }

    const onDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
        event.dataTransfer.dropEffect = "copy";
    }

    const onDragLeave = (event) => {
        event.preventDefault();
        setIsDragging(false);
    }

    const onDrop = async (event) => {
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;
        for (let i = 0; i < files.length; i++){
            if (files[i].type.split('/')[0] !== "image") continue;
            if (!images.some((e)=> e.name == files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                        file: event.target.files[0]
                    },
                ])
            }
        }
    }

    return (
        <div className="clue-img-upl-card">
            <div className={images.length == 3 ? "clue-drag-area-disable" : "clue-drag-area"} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                {isDragging ? (
                    <span className="clue-select">ปล่อยรูปตรงนี้</span>
                ) : (
                    <>
                        <div className="clue-inside-drag-area">
                            <label className="clue-drag-text">ลากและปล่อยตรงนี้ หรือ</label>
                            <span className="clue-select" role="button" onClick={selectFiles}>
                                เลือกรูป
                            </span>
                            <div className="clue-file-desc">
                                ไฟล์ที่รองรับ : .JPEG, .PNG (เพิ่มรูปภาพได้ทีละ 1 รูป)
                            </div>
                        </div>
                    </>
                )}
                <input name="file" type="file" className="clue-file" multiple ref={fileInputRef} onChange={onFileSelect}></input>
            </div>
            <div className="clue-img-upl-container">
                {images.map((images,index) => (
                    <div className="clue-upl-image" key={index}>
                        <span className="clue-upl-delete" onClick={() => deleteImage(index)}>&times;</span>
                        <img src={images.url} alt={images.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageUploaderClue;