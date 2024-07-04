import classes from "./InformationBlock.module.css";

const InformationBlock = ({title, values}) => {
    return (
        <div className={classes.InformationBlock}>
            <div className={classes.InformationBlockTitle}>{title}</div>
            <div className={classes.InformationBlockBody}>
                {values.map((item, i) =>
                    <div key={title + "-" + i + "-" + item.title} className={classes.InformationBlockValue}>
                        <div>{item[0]}</div>
                        <div>{item[1]}</div>
                    </div>
                )}
            </div>
        </div>
    )
};

export default InformationBlock;