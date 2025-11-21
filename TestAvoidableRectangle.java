import sudoku.Sudoku2;
import sudoku.SolutionStep;
import sudoku.SolutionType;

/**
 * 测试Avoidable Rectangle Type 1功能
 * 这个测试脚本创建一个包含Avoidable Rectangle Type 1模式的数独，
 * 然后调用UniquenessSolver来验证是否能正确识别和处理。
 */
public class TestAvoidableRectangle {
    
    public static void main(String[] args) {
        // 创建数独实例
        Sudoku2 sudoku = new Sudoku2();
        
        // 创建一个包含Avoidable Rectangle Type 1的测试场景
        // 假设我们有这样的矩形：
        // (0,0) = 5（已解决，非提示数）
        // (0,1) = 空，候选数：5,7
        // (1,0) = 空，候选数：5,8
        // (1,1) = 空，候选数：7,8
        
        // 设置已解决的单元格（非提示数）
        sudoku.setValue(0, 5); // (0,0) = 5
        sudoku.setFixed(0, false); // 标记为非提示数
        
        // 设置其他单元格的候选数
        // (0,1) 候选数：5,7
        sudoku.setCandidate(1, 5, true);
        sudoku.setCandidate(1, 7, true);
        
        // (1,0) 候选数：5,8
        sudoku.setCandidate(9, 5, true);
        sudoku.setCandidate(9, 8, true);
        
        // (1,1) 候选数：7,8
        sudoku.setCandidate(10, 7, true);
        sudoku.setCandidate(10, 8, true);
        
        // 创建UniquenessSolver实例
        UniquenessSolver solver = new UniquenessSolver(sudoku);
        
        System.out.println("开始测试Avoidable Rectangle Type 1...");
        
        // 调用getAvoidableRectangle方法来查找Avoidable Rectangle
        SolutionStep step = solver.getAvoidableRectangle(true);
        
        if (step != null) {
            System.out.println("成功找到Avoidable Rectangle Type 1!");
            System.out.println("删除的候选数数量: " + step.getCandidatesToDelete().size());
            
            // 打印删除的候选数详情
            for (int i = 0; i < step.getCandidatesToDelete().size(); i++) {
                int index = step.getCandidatesToDelete().get(i).getIndex();
                int cand = step.getCandidatesToDelete().get(i).getCandidate();
                System.out.println("从单元格 (" + (index / 9) + "," + (index % 9) + ") 删除候选数 " + cand);
            }
            
            // 应该从单元格(0,1)删除候选数5
            boolean success = false;
            for (int i = 0; i < step.getCandidatesToDelete().size(); i++) {
                int index = step.getCandidatesToDelete().get(i).getIndex();
                int cand = step.getCandidatesToDelete().get(i).getCandidate();
                if (index == 1 && cand == 5) {
                    success = true;
                    break;
                }
            }
            
            if (success) {
                System.out.println("测试通过：正确识别并删除了候选数5！");
            } else {
                System.out.println("测试失败：没有正确删除预期的候选数！");
            }
        } else {
            System.out.println("测试失败：未找到Avoidable Rectangle Type 1！");
        }
        
        // 额外测试：使用用户提供的具体案例
        testUserExample();
    }
    
    /**
     * 测试用户提供的具体案例
     */
    private static void testUserExample() {
        System.out.println("\n测试用户提供的具体案例...");
        
        // 这里可以根据用户提供的具体数独案例进行设置
        // 由于没有具体案例数据，这里仅作为示例框架
        Sudoku2 sudoku = new Sudoku2();
        
        // TODO: 根据用户提供的具体数独案例设置初始值和候选数
        
        UniquenessSolver solver = new UniquenessSolver(sudoku);
        SolutionStep step = solver.getAvoidableRectangle(true);
        
        if (step != null) {
            System.out.println("用户案例测试通过：找到Avoidable Rectangle！");
        } else {
            System.out.println("用户案例测试失败：未找到Avoidable Rectangle！");
        }
    }
}